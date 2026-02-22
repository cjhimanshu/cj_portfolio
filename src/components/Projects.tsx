import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github, Code, Star, Sparkles, Play, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Code Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-200/20 dark:text-primary-800/20 text-4xl font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['</', '/>', '{}', '[]', '()', '<>'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      {/* Parallax Background Shapes */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-300/20 rounded-full blur-3xl"
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
            className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 shadow-2xl mb-8"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code className="text-white" size={36} />
            
            {/* Orbiting Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${30 + i * 5}px 0`,
                }}
              />
            ))}
          </motion.div>

          {/* Animated Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          {/* Enhanced Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="w-12 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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

          <motion.p 
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Showcasing innovative solutions and creative implementations across various technologies
          </motion.p>
        </motion.div>
        
        {/* Enhanced Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative p-1 bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
            <div className="flex space-x-1">
              <motion.button
                onClick={() => setFilter('all')}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === 'all'
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'all' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <Code size={16} className="mr-2" />
                  All Projects
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setFilter('featured')}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === 'featured'
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'featured' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <Star size={16} className="mr-2" />
                  Featured
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveDemo: string;
    github: string;
    featured: boolean;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  return (
    <motion.div 
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        springX.set((e.clientX - centerX) * 0.1);
        springY.set((e.clientY - centerY) * 0.1);
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
        className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"
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
        className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/50"
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Enhanced Image Section */}
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Overlay with Enhanced Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                </motion.a>
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div 
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <Star size={12} className="inline mr-1" />
              Featured
            </motion.div>
          )}

          {/* Project Number */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
            {String(project.id).padStart(2, '0')}
          </div>
        </div>
        
        {/* Enhanced Content Section */}
        <div className="p-8">
          <motion.div 
            className="flex items-start justify-between mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
            >
              <Sparkles className="text-yellow-400" size={20} />
            </motion.div>
          </motion.div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Enhanced Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={tech} 
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Code size={10} className="mr-1" />
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex gap-3">
            <motion.a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={16} className="mr-2" />
              Live Demo
            </motion.a>
            
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={16} />
            </motion.a>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-6 left-6 w-2 h-2 bg-blue-400/30 rounded-full"
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
          className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400/30 rounded-full"
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

export default Projects;