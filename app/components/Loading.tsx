import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingProps {
  onComplete: () => void;
}

export function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const rocketControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Launch rocket animation with fade transition
          rocketControls.start({
            x: 0,
            y: '-100vh',
            rotate: 0,
            scale: [1, 1.2, 0.8],
            opacity: [1, 0.8, 0],
            transition: { duration: 1.5, ease: 'easeIn' }
          });
          // Call onComplete immediately for seamless transition
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [rocketControls, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Enhanced lighting orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            backgroundColor: [
              "rgba(6, 182, 212, 0.3)",
              "rgba(59, 130, 246, 0.3)",
              "rgba(16, 185, 129, 0.3)",
              "rgba(6, 182, 212, 0.3)"
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            backgroundColor: [
              "rgba(59, 130, 246, 0.3)",
              "rgba(139, 92, 246, 0.3)",
              "rgba(236, 72, 153, 0.3)",
              "rgba(59, 130, 246, 0.3)"
            ],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Cosmic Dust Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            className="absolute"
            style={{
              top: `${10 + (i * 10)}%`,
              left: '-10%',
              zIndex: 10,
            }}
            animate={{
              x: ['-10%', '120%'],
              y: [0, Math.sin(i) * 100, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 180],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-px h-8 bg-gradient-to-b from-white via-cyan-400 to-transparent"></div>
              <motion.div
                className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>
        ))}

        {/* Planets */}
        {[...Array(5)].map((_, i) => {
          const planets = [
            { size: 'w-16 h-16', color: 'from-cyan-400 to-blue-500', rings: false },
            { size: 'w-12 h-12', color: 'from-cyan-500 to-blue-600', rings: false },
            { size: 'w-20 h-20', color: 'from-cyan-300 to-blue-400', rings: true },
            { size: 'w-10 h-10', color: 'from-cyan-600 to-blue-700', rings: false },
            { size: 'w-14 h-14', color: 'from-cyan-500 to-cyan-600', rings: false },
          ];
          const planet = planets[i % planets.length];

          return (
            <motion.div
              key={`planet-${i}`}
              className="absolute"
              style={{
                top: `${20 + (i * 15)}%`,
                left: i % 2 === 0 ? '5%' : '85%',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <motion.div
                className={`${planet.size} bg-gradient-to-br ${planet.color} rounded-full relative`}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(59, 130, 246, 0.6)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Planet surface details */}
                <div className="absolute inset-2 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                <div className="absolute top-2 left-3 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-white/20 rounded-full"></div>

                {/* Planet rings */}
                {planet.rings && (
                  <motion.div
                    className="absolute inset-0 border-2 border-white/20 rounded-full"
                    style={{
                      transform: 'rotateX(75deg)',
                      width: '140%',
                      height: '140%',
                      left: '-20%',
                      top: '-20%',
                    }}
                    animate={{
                      rotateX: [75, 80, 75],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Nebula Clouds */}
        {[...Array(6)].map((_, i) => {
          const nebulae = [
            { colors: 'from-purple-500/20 via-pink-500/15 to-blue-500/10', size: 'w-96 h-64' },
            { colors: 'from-cyan-500/20 via-blue-500/15 to-purple-500/10', size: 'w-80 h-56' },
            { colors: 'from-pink-500/20 via-red-500/15 to-orange-500/10', size: 'w-72 h-48' },
            { colors: 'from-green-500/20 via-cyan-500/15 to-blue-500/10', size: 'w-88 h-60' },
            { colors: 'from-yellow-500/20 via-orange-500/15 to-red-500/10', size: 'w-76 h-52' },
            { colors: 'from-indigo-500/20 via-purple-500/15 to-pink-500/10', size: 'w-84 h-58' },
          ];
          const nebula = nebulae[i % nebulae.length];

          return (
            <motion.div
              key={`nebula-${i}`}
              className={`absolute bg-gradient-radial ${nebula.colors} rounded-full blur-3xl`}
              style={{
                top: `${10 + (i * 15)}%`,
                left: `${10 + (i * 15)}%`,
                width: nebula.size.split(' ')[0],
                height: nebula.size.split(' ')[1],
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          );
        })}

        {/* Pulsar Effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`pulsar-${i}`}
            className="absolute"
            style={{
              top: `${25 + (i * 20)}%`,
              left: `${20 + (i * 20)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            <div className="relative">
              <motion.div
                className="w-4 h-4 bg-cyan-400 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(6, 182, 212, 0.5)',
                    '0 0 30px rgba(6, 182, 212, 1)',
                    '0 0 10px rgba(6, 182, 212, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Pulsar beams */}
              {[...Array(6)].map((_, j) => (
                <motion.div
                  key={`beam-${j}`}
                  className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent origin-left"
                  style={{
                    transform: `rotate(${j * 60}deg) translateX(-50%)`,
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: j * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulsing light effects */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Code pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Spaceship */}
        <motion.div
          className="relative mb-8"
          animate={rocketControls}
          initial={{ y: 0 }}
          transition={{
            y: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        >
          {/* Spaceship Body with Advanced Design */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 8, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Main Hull */}
            <motion.div
              className="relative w-16 h-28 bg-gradient-to-b from-cyan-300 via-blue-500 to-cyan-700 rounded-t-full shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
                  '0 0 35px rgba(6, 182, 212, 1), 0 0 60px rgba(59, 130, 246, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Nose Cone */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-5 bg-gradient-to-t from-cyan-200 to-white rounded-t-full border border-cyan-300"></div>

              {/* Cockpit Windows */}
              <motion.div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-100/90 rounded-full border-2 border-cyan-300"
                animate={{
                  opacity: [0.9, 1, 0.9],
                  boxShadow: [
                    'inset 0 0 10px rgba(6, 182, 212, 0.5)',
                    'inset 0 0 20px rgba(6, 182, 212, 1)',
                    'inset 0 0 10px rgba(6, 182, 212, 0.5)',
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-100/70 rounded-full border border-cyan-300"></div>

              {/* Wing Details */}
              <div className="absolute top-6 -left-2 w-3 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-l-full"></div>
              <div className="absolute top-6 -right-2 w-3 h-8 bg-gradient-to-l from-cyan-400 to-blue-600 rounded-r-full"></div>

              {/* Engine Details */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gradient-to-t from-gray-700 to-gray-500 rounded-b-lg"></div>
            </motion.div>

            {/* Stabilizer Fins */}
            <motion.div
              className="absolute -bottom-2 -left-3 w-4 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-bl-full"
              animate={{
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-3 w-4 h-6 bg-gradient-to-l from-cyan-500 to-blue-600 rounded-br-full"
              animate={{
                rotate: [5, -5, 5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Advanced Engine Flames */}
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
              animate={{
                scaleY: [1, 2.5, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-3 h-8 bg-gradient-to-t from-orange-400 via-yellow-400 to-red-400 rounded-b-full blur-sm"></div>
              <div className="absolute top-1 left-0.5 w-2 h-6 bg-gradient-to-t from-red-500 to-orange-500 rounded-b-full"></div>
              <div className="absolute top-2 left-1 w-1 h-4 bg-gradient-to-t from-yellow-300 to-white rounded-b-full"></div>
            </motion.div>

            {/* Energy Trail Effect */}
            <motion.div
              className="absolute top-1/2 -left-12 w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1.5, 0],
                x: [-10, -20, -10],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Enhanced Particle Effects Around Ship */}
            {[...Array(12)].map((_, i) => {
              const colors = ['bg-cyan-400', 'bg-blue-400', 'bg-emerald-400', 'bg-purple-400', 'bg-pink-400'];
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute w-1 h-1 ${color} rounded-full`}
                  style={{
                    top: `${20 + Math.sin(i) * 40}%`,
                    left: `${30 + Math.cos(i) * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.9, 0],
                    x: [0, Math.sin(i) * 25, 0],
                    y: [0, Math.cos(i) * 20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1.5 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Enhanced Shockwave Effects */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-400/40 rounded-full"
              animate={{
                scale: [0, 2.5, 0],
                opacity: [0, 0.6, 0],
                borderWidth: [2, 1, 2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
            {/* Secondary shockwave */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-blue-400/30 rounded-full"
              animate={{
                scale: [0, 1.8, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.2,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-80 mb-4">
          <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Progress text */}
        <motion.p
          className="text-white text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading... {progress}%
        </motion.p>

        {/* Loading text */}
        <motion.p
          className="text-gray-300 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Preparing your experience
        </motion.p>
      </div>
    </div>
  );
}