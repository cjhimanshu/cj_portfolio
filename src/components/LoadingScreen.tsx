import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sparkles, Rocket, Cpu, Database, Globe, Layers } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const loadingPhases = [
    {
      texts: ["Initializing Portfolio...", "Setting up Environment...", "Loading Core Systems..."],
      icon: Cpu,
      color: "from-blue-500 to-indigo-600"
    },
    {
      texts: ["Loading Skills Database...", "Compiling Technologies...", "Optimizing Performance..."],
      icon: Database,
      color: "from-emerald-500 to-cyan-600"
    },
    {
      texts: ["Preparing Projects...", "Loading Showcase...", "Building Gallery..."],
      icon: Layers,
      color: "from-purple-500 to-pink-600"
    },
    {
      texts: ["Connecting Networks...", "Syncing Data...", "Finalizing Setup..."],
      icon: Globe,
      color: "from-cyan-500 to-teal-600"
    },
    {
      texts: ["Almost Ready...", "Launching Portfolio...", "Welcome Aboard!"],
      icon: Rocket,
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    // Enhanced progress with phase-based loading
    // faster progress: larger steps and shorter interval to reduce perceived load time
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 8; // faster increments
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * loadingPhases.length);
        if (phaseIndex !== currentPhase && phaseIndex < loadingPhases.length) {
          setCurrentPhase(phaseIndex);
          setCurrentText(0);
        }

        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setShowWelcome(true);
          // much shorter welcome delay to make page interactive quickly
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              try { onLoadingComplete?.(); } catch (e) { /* ignore */ }
            }, 100);
          }, 300);
          return 100;
        }
        return newProgress;
      });
  }, 40);

    // Phase-specific text rotation
    const textTimer = setInterval(() => {
      if (currentPhase < loadingPhases.length) {
        setCurrentText(prev => (prev + 1) % loadingPhases[currentPhase].texts.length);
      }
  }, 500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [currentPhase, onLoadingComplete]);

  const CurrentIcon = loadingPhases[currentPhase]?.icon || Code;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30 dark:from-dark-900 dark:via-slate-800 dark:to-emerald-900/20"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(6px)"
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated neural network */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
      {[...Array(3)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${10 + (i * 12)}%`}
                  y1="10%"
                  x2={`${20 + (i * 10)}%`}
                  y2="90%"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  animate={{
        pathLength: [0, 1, 0],
        opacity: [0, 0.6, 0],
                  }}
                  transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.15,
        ease: "easeInOut"
                  }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Matrix-style falling code */}
    {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-emerald-400/20 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-10%",
                }}
                animate={{
      y: [0, window.innerHeight + 100],
      opacity: [0, 1, 0],
                }}
                transition={{
      duration: 2 + Math.random() * 1,
      repeat: Infinity,
      delay: Math.random() * 1.5,
      ease: "linear",
                }}
              >
                {['npm install', 'git commit', 'yarn build', 'docker run', 'kubectl apply', 'npm start'][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}

            {/* Animated mesh gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 25% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 75% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating particles */}
    {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? 'w-2 h-2 bg-emerald-400/40' : 
                  i % 3 === 1 ? 'w-3 h-3 bg-cyan-400/35' : 
                  'w-1 h-1 bg-purple-400/45'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-15, 15, -15],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
      duration: 2 + Math.random() * 1,
      repeat: Infinity,
      delay: Math.random() * 1,
      ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Enhanced Logo with Phase Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 1
              }}
            >
              <motion.div
                className={`relative w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br ${loadingPhases[currentPhase]?.color || 'from-emerald-500 to-cyan-600'} shadow-2xl flex items-center justify-center`}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(16, 185, 129, 0.4)",
                    "0 0 60px rgba(6, 182, 212, 0.6)",
                    "0 0 30px rgba(16, 185, 129, 0.4)"
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Morphing center icon */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhase}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CurrentIcon className="text-white" size={44} />
                  </motion.div>
                </AnimatePresence>

                {/* Enhanced orbiting elements */}
        {[Sparkles, Code, Rocket].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
          rotate: { duration: 4 + i, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, delay: i * 0.1 }
                    }}
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${40 + i * 6}px 0`,
                    }}
                  >
                    <Icon className="text-white" size={14} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Name with Glitch Effect */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className="bg-gradient-to-r from-slate-800 via-emerald-600 to-cyan-700 bg-clip-text text-transparent dark:from-white dark:via-emerald-400 dark:to-cyan-400 relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Himanshu Kumar
                
                {/* Glitch overlay */}
                {progress > 80 && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      opacity: [0, 0.7, 0],
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    Himanshu Kumar
                  </motion.span>
                )}
              </motion.span>
            </motion.h1>

            {/* Phase-based Loading Text */}
            <motion.div
              className="h-10 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${currentPhase}-${currentText}`}
                  className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {loadingPhases[currentPhase]?.texts[currentText] || "Loading..."}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Progress Bar with Segments */}
            <motion.div
              className="w-96 mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="relative">
                {/* Segmented progress background */}
                <div className="flex space-x-1 mb-2">
                  {loadingPhases.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 h-1 rounded-full ${
                        i <= currentPhase ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-slate-700'
                      }`}
                      animate={{
                        backgroundColor: i <= currentPhase ? '#10b981' : '#e5e7eb',
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>

                {/* Main progress bar */}
                <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Progress percentage with animation */}
                <motion.div
                  className="mt-3 text-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8] 
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <span className="text-lg text-slate-600 dark:text-slate-400 font-bold">
                    {Math.round(progress)}%
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Loading Animation */}
            <motion.div
              className="flex justify-center items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
      {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  animate={{
        scale: [1, 1.6, 1],
        opacity: [0.5, 1, 0.5],
        y: [0, -8, 0],
                  }}
                  transition={{
        duration: 0.9,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Welcome Message */}
            <AnimatePresence>
              {showWelcome && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.35, type: "spring" }}
                >
                  <motion.div
                    className="text-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-emerald-200/50 dark:border-slate-700/50 shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(16, 185, 129, 0.3)",
                        "0 0 0 20px rgba(16, 185, 129, 0)",
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="text-emerald-600 mx-auto mb-4" size={48} />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      Welcome!
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      Portfolio ready to explore
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
