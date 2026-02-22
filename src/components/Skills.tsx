import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { skills } from '../data';
import { Code, Zap, Star, Sparkles, Trophy, Target, Brain, Rocket } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
      id="skills" 
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-pink-50/30 dark:from-dark-900 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Tech Icons */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-200/20 dark:text-indigo-800/20 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['⚛️', '🔥', '⚡', '🚀', '💎', '🎯'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      {/* Parallax Background Shapes */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl"
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
          {/* Animated Icon Complex */}
          <motion.div 
            className="relative inline-flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 shadow-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                boxShadow: "0 30px 60px -12px rgba(99, 102, 241, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Brain className="text-white" size={40} />
              
              {/* Orbiting Skill Icons */}
              {[Code, Zap, Star, Rocket].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
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
                    transformOrigin: `${45 + i * 8}px 0`,
                  }}
                >
                  <Icon className="text-white" size={14} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Title with Gradient Flow */}
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
              Technical Skills
            </motion.span>
          </motion.h2>

          {/* Enhanced Decorative Elements */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="w-16 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              animate={{ scaleX: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div 
              className="w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-16 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ scaleX: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.p 
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Mastering cutting-edge technologies and frameworks to build exceptional digital experiences
          </motion.p>
        </motion.div>
        
        {/* Enhanced Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              index={index}
              isHovered={hoveredSkill === skill.name}
              onHover={setHoveredSkill}
            />
          ))}
        </motion.div>
        
        {/* Enhanced Additional Technologies */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl mb-8"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="text-white" size={28} />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Git', 'Github', 'SQL', 'TypeScript', 'Next.js', 'Angular.js', '.Net', 'Firebase'].map((tech, i) => (
              <motion.span 
                key={tech}
                className="relative px-6 py-3 rounded-2xl text-sm font-bold bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl text-gray-800 dark:text-gray-200 border border-white/20 dark:border-gray-600/20 shadow-lg overflow-hidden group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
  };
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isHovered, onHover }) => {
  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  return (
    <motion.div 
      className="relative group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
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
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        springX.set((e.clientX - centerX) * 0.1);
        springY.set((e.clientY - centerY) * 0.1);
      }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => {
        springX.set(0);
        springY.set(0);
        onHover(null);
      }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="relative p-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl overflow-hidden"
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 60%)",
              "radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 60%)",
              "radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 60%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10">
          <motion.div 
            className="flex justify-between items-center mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {skill.name}
            </h3>
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="text-indigo-500" size={20} />
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {skill.level}%
              </span>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative w-full h-4 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0, x: "-100%" }}
              whileInView={{ 
                width: `${skill.level}%`,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            />
            
            {/* Animated highlight */}
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1 + 1.5,
              }}
              style={{ width: `${skill.level}%` }}
            />
          </div>

          {/* Skill Level Indicator */}
          <motion.div 
            className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
          >
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
            <span>Expert</span>
          </motion.div>
        </div>

        {/* Floating Skill Icons */}
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-2 h-2 bg-indigo-400/40 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [-5, -15, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5 + Math.random(),
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;