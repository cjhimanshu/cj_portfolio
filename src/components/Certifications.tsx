import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { certifications } from '../data/index';
import { Award, Calendar, ExternalLink, Shield, CheckCircle, Building, Sparkles, Star } from 'lucide-react';

const Certifications: React.FC = () => {
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
      id="certifications" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-purple-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-3xl"
      />
      
      {/* Animated Lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile-Optimized Header Design */}
          <motion.div 
            className="relative inline-flex items-center justify-center mb-6 md:mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {/* Main Icon Container - Responsive sizing */}
            <motion.div 
              className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 shadow-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                boxShadow: "0 30px 60px -12px rgba(16, 185, 129, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="text-white" size={28} />
              
              {/* Orbiting Elements - Scaled for mobile */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 
                      ? "linear-gradient(45deg, #f59e0b, #f97316)" 
                      : "linear-gradient(45deg, #10b981, #059669)",
                    top: "50%",
                    left: "50%",
                    transformOrigin: `${25 + i * 4}px 0`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              
              {/* Inner Glow Effect */}
              <motion.div
                className="absolute inset-1 md:inset-2 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            {/* Side Decorative Elements - Hidden on small screens, repositioned for tablets */}
            <motion.div 
              className="hidden sm:block absolute -left-8 md:-left-16 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="text-white" size={16} />
            </motion.div>
            
            <motion.div 
              className="hidden sm:block absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg"
              animate={{
                y: [3, -3, 3],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <CheckCircle className="text-white" size={16} />
            </motion.div>
          </motion.div>
          
          {/* Mobile-Responsive Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-white dark:via-emerald-400 dark:to-blue-400 mb-4 md:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {`Certifications & Achievements`.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#10b981",
                  transition: { duration: 0.2 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
          {/* Mobile-Optimized Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="w-8 md:w-12 h-1.5 md:h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div 
              className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-6 md:w-8 h-1 md:h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="w-8 md:w-12 h-1.5 md:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
          
          {/* Mobile-Responsive Description */}
          <motion.p 
            className="max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Professional certifications and notable achievements that showcase my technical expertise, 
            continuous learning journey, and commitment to excellence in software development
          </motion.p>
          
          {/* Mobile-Optimized Achievement Stats */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 mt-6 md:mt-8 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div 
              className="text-center min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">2+</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Certifications</div>
            </motion.div>
            
            <div className="w-px h-6 sm:h-8 md:h-12 bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
            
            <motion.div 
              className="text-center min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Achievements</div>
            </motion.div>
            
            <div className="w-px h-6 sm:h-8 md:h-12 bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
            
            <motion.div 
              className="text-center min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">99%</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Verified</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Mobile-Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index} 
              certification={certification}
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: {
    title: string;
    issuer: string;
    date: string;
    certificate: string;
    image?: string;
    credentialId?: string;
  };
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  // List of images to exclude
  const excludedImages = [
    'Screenshot 2025-08-04 at 6.12.49 AM.png',
    '/Users/apple/Desktop/Screenshot 2025-08-04 at 6.12.49 AM.png'
  ];

  // Check if image should be displayed (exclude specific unwanted images)
  const shouldShowImage = certification.image && 
    !excludedImages.some(excludedImg => certification.image?.includes(excludedImg)) &&
    // Only show valid HTTP URLs or properly formatted images
    (certification.image.startsWith('http') || 
     (certification.image.startsWith('/') && 
      !certification.image.includes('/Users/apple/Desktop/Screenshot')));

  return (
    <motion.div 
      className="relative group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          }
        },
      }}
      onMouseMove={(e) => {
        // Only enable mouse tracking on larger screens
        if (window.innerWidth > 768) {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          springX.set((e.clientX - centerX) * 0.05);
          springY.set((e.clientY - centerY) * 0.05);
        }
      }}
      onMouseLeave={() => {
        springX.set(0);
        springY.set(0);
      }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-3xl blur opacity-20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl border border-white/20 dark:border-gray-700/50"
        whileHover={{ 
          y: -6, 
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Mobile-Optimized Certificate Image Section */}
        <div className="relative h-40 sm:h-48 md:h-56 bg-gradient-to-br from-primary-100 via-blue-50 to-purple-100 dark:from-primary-900/30 dark:via-blue-900/20 dark:to-purple-900/30 overflow-hidden">
          {/* ...existing image logic with mobile optimizations... */}
          {shouldShowImage ? (
            <div className="relative w-full h-full">
              <motion.img 
                src={certification.image} 
                alt={`${certification.title} certificate`}
                className="w-full h-full object-contain bg-white/90 dark:bg-dark-700/90 rounded-lg m-1 md:m-2"
                style={{
                  width: 'calc(100% - 8px)',
                  height: 'calc(100% - 8px)',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Certificate Frame Overlay */}
              <div className="absolute inset-1 md:inset-2 border border-white/30 rounded-lg pointer-events-none"></div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10"></div>
              
              {/* Mobile-Optimized Certificate Design */}
              <motion.div 
                className="relative w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary-500 via-blue-600 to-purple-600 shadow-xl md:shadow-2xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, 1, -1, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Certificate Background */}
                <div className="absolute inset-1 md:inset-2 bg-white/95 dark:bg-dark-700/95 rounded-lg md:rounded-xl">
                  {/* Certificate Header */}
                  <div className="absolute top-1 md:top-2 left-1 md:left-2 right-1 md:right-2 h-0.5 md:h-1 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full"></div>
                  
                  {/* Certificate Content */}
                  <div className="flex flex-col items-center justify-center h-full px-1 md:px-2">
                    <Award className="text-primary-600 dark:text-primary-400 mb-0.5 md:mb-1" size={16} />
                    <div className="w-6 md:w-8 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-0.5 md:mb-1"></div>
                    <div className="w-8 md:w-12 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-0.5 md:mb-1"></div>
                    <div className="w-4 md:w-6 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  
                  {/* Certificate Footer */}
                  <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 right-1 md:right-2 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full"></div>
                </div>
                
                {/* Mobile-friendly decorative corners */}
                <div className="absolute top-0.5 md:top-1 left-0.5 md:left-1 w-1.5 md:w-2 h-1.5 md:h-2 border-l border-t border-white/60 rounded-tl"></div>
                <div className="absolute top-0.5 md:top-1 right-0.5 md:right-1 w-1.5 md:w-2 h-1.5 md:h-2 border-r border-t border-white/60 rounded-tr"></div>
                <div className="absolute bottom-0.5 md:bottom-1 left-0.5 md:left-1 w-1.5 md:w-2 h-1.5 md:h-2 border-l border-b border-white/60 rounded-bl"></div>
                <div className="absolute bottom-0.5 md:bottom-1 right-0.5 md:right-1 w-1.5 md:w-2 h-1.5 md:h-2 border-r border-b border-white/60 rounded-br"></div>
                
                {/* Reduced orbiting elements for mobile */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 6 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${20 + i * 6}px 0`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-sm"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          
          {/* Mobile-Optimized Verified Badge */}
          <motion.div 
            className="absolute top-2 md:top-3 right-2 md:right-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-1.5 md:p-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={12} />
          </motion.div>
          
          {/* Enhanced Floating Sparkles - Only show when no image */}
          {!shouldShowImage && [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [-3, -8, -3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            >
              <Sparkles className="text-yellow-400" size={10} />
            </motion.div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        </div>

        {/* Mobile-Optimized Content Section */}
        <div className="p-4 md:p-6 lg:p-8">
          {/* Mobile-friendly header */}
          <motion.div 
            className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg flex-shrink-0"
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.5 }}
            >
              <Award className="text-white" size={16} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h3 
                className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight"
                whileHover={{ scale: 1.01 }}
              >
                {certification.title}
              </motion.h3>
            </div>
          </motion.div>
          
          {/* Mobile-optimized details */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <motion.div 
              className="flex items-center gap-2 md:gap-3 text-gray-700 dark:text-gray-300"
              whileHover={{ x: 3 }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
                <Building size={12} />
              </div>
              <span className="font-semibold text-xs md:text-sm">
                {certification.issuer}
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm"
              whileHover={{ x: 3 }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
                <Calendar size={12} />
              </div>
              <span>Issued {certification.date}</span>
            </motion.div>

            {certification.credentialId && (
              <motion.div 
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600 p-2 md:p-3 rounded-lg md:rounded-xl border-l-2 md:border-l-4 border-primary-500"
                whileHover={{ scale: 1.01, x: 3 }}
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</div>
                <div className="text-xs md:text-sm font-mono text-gray-700 dark:text-gray-300">{certification.credentialId}</div>
              </motion.div>
            )}
          </div>
          
          {/* Mobile-optimized button */}
          <motion.a 
            href={certification.certificate} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn relative w-full inline-flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 overflow-hidden text-sm md:text-base"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span>View Certificate</motion.span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={16} className="ml-2" />
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"
              animate={{
                x: [-100, 100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          </motion.a>
        </div>

        {/* Enhanced Decorative Elements */}
        <motion.div 
          className="absolute top-6 left-6 w-3 h-3 bg-primary-400/30 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div 
          className="absolute top-6 left-12 w-2 h-2 bg-purple-400/30 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute bottom-6 right-6 w-3 h-3 bg-primary-400/30 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Certifications;