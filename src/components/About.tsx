import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { personalInfo } from '../data';
import { MapPin, Mail, Phone, GraduationCap, Calendar, Building, Download, ExternalLink, User, Sparkles, Zap, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-dark-900 dark:via-slate-800 dark:to-indigo-900/20 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Parallax Background Shapes */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"
      />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Icon */}
          <motion.div 
            className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 shadow-2xl mb-8"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              boxShadow: "0 30px 60px -12px rgba(99, 102, 241, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <User className="text-white" size={36} />
            
            {/* Orbiting Elements */}
            {[Sparkles, Zap, Trophy].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${35 + i * 10}px 0`,
                }}
              >
                <Icon className="text-white" size={12} />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-indigo-400 dark:to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              About Me
            </motion.span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="w-12 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-12 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Image Section */}
          <motion.div 
            className="w-full max-w-md lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Multiple Background Layers */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl blur opacity-40"
                animate={{
                  scale: [1.05, 1, 1.05],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image Container */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/20"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 35px 70px -12px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img 
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="About Himanshu Kumar" 
                  className="w-full h-auto relative z-10"
                />
                
                {/* Enhanced Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-white font-bold text-lg mb-1">Full Stack Developer</h4>
                      <p className="text-white/80 text-sm">Passionate about creating amazing digital experiences</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  animate={{
                    y: [-2, 2, -2],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Available for Hire
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced Content Section */}
          <motion.div 
            className="w-full lg:w-6/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Who I Am Section */}
            <motion.div
              className="mb-8"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </motion.div>

            {/* Enhanced Education Section */}
            <motion.div className="mb-8">
              <motion.h3 
                className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mr-3 text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <GraduationCap size={20} />
                </motion.div>
                Education Journey
              </motion.h3>
              
              <div className="space-y-4">
                {[
                  {
                    degree: "MCA - Master of Computer Applications",
                    school: "St. Andrews Institute of Technology and Management, Gurugram",
                    period: "2024 - 2026",
                    icon: <Calendar size={14} />,
                    status: "Current"
                  },
                  {
                    degree: "Patliputra University - Bachelor of Computer Applications",
                    school: "Patliputra University",
                    period: "2021 - 2024",
                    icon: <Calendar size={14} />,
                    status: "Completed"
                  },
                  {
                    degree: "Intermediate",
                    school: "Bihar Board",
                    period: "2019 - 2021",
                    icon: <Building size={14} />,
                    status: "Completed"
                  },
                  {
                    degree: "Class 10th",
                    school: "CBSE",
                    period: "2018 - 2019",
                    icon: <Building size={14} />,
                    status: "Completed"
                  }
                ].map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-indigo-200/50 dark:border-slate-700/50 shadow-lg group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 15px 30px rgba(99, 102, 241, 0.2)"
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {edu.degree}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                          {edu.school}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          {edu.icon} <span className="ml-1">{edu.period}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "from-red-500 to-pink-500" },
                { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "from-green-500 to-emerald-500" },
                { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location, span: true, color: "from-blue-500 to-indigo-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`${item.span ? 'sm:col-span-2' : ''} relative group cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -3 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r opacity-20 rounded-2xl blur"
                    animate={{
                      opacity: hoveredCard === index ? 0.4 : 0.2,
                      scale: hoveredCard === index ? 1.02 : 1,
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`
                    }}
                  />
                  
                  <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg">
                    <div className="flex items-center">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-3 text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Resume Button */}
            <motion.a 
              href="/resume/resume_2.pdf" 
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                animate={{
                  x: [-100, 100],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Download size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <ExternalLink size={16} className="ml-2 relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;