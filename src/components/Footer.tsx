import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { personalInfo, navLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInFooter, setIsMouseInFooter] = useState(false);
  
  // Handle mouse movement for glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const footer = document.getElementById('footer-container');
    if (footer) {
      const rect = footer.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  const handleMouseEnter = () => {
    setIsMouseInFooter(true);
  };
  
  const handleMouseLeave = () => {
    setIsMouseInFooter(false);
  };

  // Floating shapes animation
  const floatingShapes = Array(5).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  return (
    <footer 
      id="footer-container"
      className="relative bg-gradient-to-br from-gray-900 to-gray-950 dark:from-black dark:to-dark-900 text-white pt-20 pb-8 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive mouse glow effect */}
      {isMouseInFooter && (
        <motion.div 
          className="absolute pointer-events-none rounded-full bg-primary-500/10 blur-3xl opacity-30 z-0"
          style={{ 
            width: 300, 
            height: 300, 
            left: mousePosition.x - 150, 
            top: mousePosition.y - 150,
          }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
      
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 background-pan"></div>
      
      {/* Floating shapes */}
      {floatingShapes.map(shape => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-white/5 pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: 0.1
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.2, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg 
          className="relative block w-full h-8 sm:h-12" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white dark:fill-dark-900 opacity-10"
          ></path>
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Name showcase section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block relative spotlight-effect"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 background-pan glow-text">
                  Himanshu Kumar
              </span>
            </motion.h2>
            
            <motion.div
              className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.p
            className="mt-4 text-gray-400 max-w-lg mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="typewriter-text">Transforming ideas into digital reality</span>
          </motion.p>
          
          {/* Social media links */}
          <motion.div
            className="flex justify-center space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
          >
            {[
              { icon: <Github size={20} />, href: personalInfo.github, label: "GitHub", color: "from-purple-500 to-indigo-500" },
              { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn", color: "from-blue-500 to-cyan-500" },
              { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email", color: "from-red-500 to-orange-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white border border-white/10 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
              >
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': social.color.split(' ')[0].replace('from-', ''),
                    '--tw-gradient-to': social.color.split(' ')[1].replace('to-', '')
                  }}
                />
                <span className="relative z-10">{social.icon}</span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100">
                  <motion.span 
                    className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-white/20 blur-md"
                    style={{ top: "50%", left: "50%" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-2xl font-bold cursor-pointer inline-block"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                  Portfolio
                </span>
                <span className="text-primary-500 animate-pulse">.</span>
              </Link>
            </motion.div>
            <p className="text-gray-400 mt-3 max-w-md text-sm leading-relaxed">
              A passionate Full Stack Developer focused on building beautiful interfaces & experiences that bring value to people's lives.
            </p>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, i) => (
                <motion.span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 flex items-center border border-white/5 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  whileHover={{ 
                    y: -3, 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <motion.div 
                    className="mr-1"
                    animate={{ rotate: [0, 0, 180, 180, 0], scale: [1, 1, 1.2, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3, repeatDelay: 3 }}
                  >
                    <Code size={10} />
                  </motion.div>
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer flex items-center group text-sm"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary-500 mr-2 transition-colors"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: { duration: 1, repeat: Infinity, repeatDelay: 1 }
                      }}
                    />
                    {link.title}
                    <motion.span 
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "loop" }}
                    >
                      <ExternalLink size={10} />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Contact
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-3">
              {[
                { icon: <Mail size={14} />, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={14} />, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={14} />, value: personalInfo.location }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-sm group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-primary-400 mt-0.5 mr-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      transition: { duration: 1.5, repeat: Infinity, repeatDelay: 2 }
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors relative overflow-hidden group-hover:pl-1"
                    >
                      <span className="relative z-10">{item.value}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) : (
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.value}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Call-to-action section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Let's Connect
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </h3>
            
            {/* Enhanced glass card with animation */}
            <motion.div 
              className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-white/5 shadow-lg relative overflow-hidden backdrop-blur-sm"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary-500/30 blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="flex items-center mb-3 relative z-10">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center mr-3"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    transition: { duration: 5, repeat: Infinity }
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                      transition: { duration: 3, repeat: Infinity }
                    }}
                  >
                    <Star size={18} className="text-yellow-400" />
                  </motion.div>
                </motion.div>
                <p className="text-white text-sm font-medium">Available for new opportunities</p>
              </div>
              
              <p className="text-gray-400 text-sm mb-3 relative z-10">Interested in working together? Let's connect and discuss how I can help with your project.</p>
              
              <div className="flex items-center relative z-10">
                <span className="flex h-2 w-2 relative mr-2">
                  <motion.span 
                    className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-xs">Available for freelance & full-time roles</span>
              </div>
              
              {/* Enhanced button with animated background */}
              <motion.button
                className="w-full mt-4 py-2 px-4 rounded-lg text-white text-sm font-medium relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 background-pan"></div>
                
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="flex items-center justify-center relative z-10"
                >
                  Get in touch 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    <ExternalLink size={14} />
                  </motion.span>
                </Link>
                
                {/* Button shine effect */}
                <motion.div 
                  className="absolute inset-0 w-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
                >
                  <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Footer bottom section */}
        <motion.div 
          className="relative pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0"
              whileHover={{ color: "#9ca3af" }}
            >
                © {currentYear} <span className="text-gradient-subtle font-medium">Himanshu Kumar</span>. All rights reserved.
            </motion.p>
            
            <motion.p 
              className="text-gray-500 text-xs sm:text-sm flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
                Crafted with 
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  repeatType: "reverse" 
                }}
                className="mx-1 text-red-500"
              >
                <Heart size={14} fill="currentColor" />
              </motion.span> 
                by <span className="text-gradient-subtle font-medium ml-1">Himanshu Kumar</span>
            </motion.p>
          </div>
          
          {/* Enhanced back to top button */}
          <motion.div
            className="absolute right-0 top-0 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="group w-12 h-12 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 background-pan"></div>
              
              {/* Multiple ripple effects */}
              <span className="absolute inset-0 rounded-full border border-white/20 scale-0 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700"></span>
              <span className="absolute inset-0 rounded-full border border-white/20 scale-0 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-1000 delay-100"></span>
              
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUp size={18} className="text-white" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;