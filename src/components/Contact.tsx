import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  // Initialize EmailJS once when component mounts with the correct User ID
  useEffect(() => {
    // Initialize with your actual EmailJS User ID
    emailjs.init("xYQad8xf0eL3eYbC7");
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: personalInfo.name,
      user_name: formData.name,     // Added to ensure name is explicitly included
      user_email: formData.email,   // Added to ensure email is explicitly included
      user_message: formData.message // Added to ensure message is explicitly included
    };
    
    try {
      // Send email using your provided Service ID and Template ID
      await emailjs.send(
        'service_yj0nwsr', // Your Service ID
        'template_svjar07', // Your Template ID
        templateParams
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/50 dark:bg-primary-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-50/50 dark:bg-secondary-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Get In Touch</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4 sm:mb-6 inline-block">
              Contact Information
            </h3>
            {/* Profile image */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img src="/hsk.jpg" alt="Himanshu Kumar" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-primary-200 dark:border-primary-700 shadow-md" />
            </div>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {[
                { 
                  icon: <Mail size={20} />, 
                  title: "Email", 
                  content: personalInfo.email, 
                  href: `mailto:${personalInfo.email}`,
                  color: "from-blue-400 to-indigo-400",
                  delay: 0.1
                },
                { 
                  icon: <Phone size={20} />, 
                  title: "Phone", 
                  content: personalInfo.phone, 
                  href: `tel:${personalInfo.phone}`,
                  color: "from-green-400 to-teal-400",
                  delay: 0.2
                },
                { 
                  icon: <MapPin size={20} />, 
                  title: "Location", 
                  content: personalInfo.location,
                  color: "from-red-400 to-pink-400",
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start bg-gray-50 dark:bg-dark-800 p-4 rounded-xl hover:shadow-md transition-all duration-300 scale-up"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: item.delay }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-words"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-5 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Let's connect
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex space-x-3">
                <motion.a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-700 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-700 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-dark-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-5 sm:mb-6 inline-block">
              Send Me a Message
            </h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-start"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                <p>Thank you for your message! I'll get back to you soon.</p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg flex items-start"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                <p>There was an error sending your message. Please try again or contact me directly at cjhimanshu49@gmail.com.</p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    placeholder="Enter Your Name"
                  />
                </motion.div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    placeholder="Enter Your Email"
                  />
                </motion.div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Enter Your Message"
                  />
                </motion.div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-300 text-sm sm:text-base ${
                  isSubmitting 
                    ? 'bg-primary-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;