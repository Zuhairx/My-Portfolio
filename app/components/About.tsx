import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './image/ImageWithFallback';
const profileImg = '/image/foto.JPEG'

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getResponsiveValues = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
    if (width < 640) {
      // Mobile
      return {
        container: { y: 30, scale: 0.98, stagger: 0.15, duration: 1.0 },
        item: { x: -80, y: 30, scale: 0.85, rotate: -5, rotateX: -10, duration: 0.7 },
        stagger: 0.1
      };
    } else if (width < 1024) {
      // Tablet
      return {
        container: { y: 40, scale: 0.96, stagger: 0.18, duration: 1.1 },
        item: { x: -120, y: 40, scale: 0.75, rotate: -8, rotateX: -12, duration: 0.9 },
        stagger: 0.15
      };
    } else {
      // Desktop
      return {
        container: { y: 50, scale: 0.95, stagger: 0.2, duration: 1.2 },
        item: { x: -150, y: 50, scale: 0.7, rotate: -10, rotateX: -15, duration: 1.0 },
        stagger: 0.2
      };
    }
  };

  const responsive = getResponsiveValues();

  const containerVariants = {
    hidden: { opacity: 0, y: responsive.container.y, scale: responsive.container.scale },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: responsive.container.duration,
        staggerChildren: responsive.container.stagger,
        ease: "easeOut" as const
      }
    }
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: responsive.item.x, scale: responsive.item.scale, rotate: responsive.item.rotate },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: responsive.item.duration
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: -responsive.item.x, scale: responsive.item.scale, rotate: -responsive.item.rotate },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: responsive.item.duration
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: responsive.item.y, scale: responsive.item.scale, rotateX: responsive.item.rotateX },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: responsive.item.duration
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 50, rotateX: -90 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + index * 0.15,
        duration: 0.6,
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    })
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 2.5 + index * 0.15,
        type: "spring" as const,
        stiffness: 150,
        damping: 12
      }
    })
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-cyan-500 text-xs sm:text-sm tracking-wider uppercase mb-2 block">Get to know me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">About Me</h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 md:items-start lg:items-center">
            <motion.div
              variants={leftItemVariants}
              className="relative order-1 md:order-1 lg:order-1 mt-8 sm:-mt-6 md:-mt-0 lg:-mt-6 md:col-span-1 md:flex md:justify-center"
            >
              <div className="md:max-w-sm lg:max-w-none">
                <motion.div
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl"
                  whileHover={{ scale: 1.02, rotateY: window.innerWidth > 1024 ? 5 : 0 }}
                  whileTap={{ scale: 1.02, rotateY: window.innerWidth > 1024 ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src="/image/foto.JPEG"
                    alt="me"
                    className="w-full h-auto rounded-xl sm:rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl -z-10"
                  variants={floatingVariants}
                  animate="animate"
                />
                <motion.div
                  variants={itemVariants}
                  className="text-center mt-4 sm:mt-6"
                >
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent leading-tight"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.01, color: '#06b6d4' }}
                    transition={{ duration: 0.3 }}
                  >
                    Muhammad Zuhair Yuliansyah
                  </motion.h3>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={rightItemVariants} className="space-y-4 sm:space-y-6 order-1 md:order-2 lg:order-2 md:col-span-1">
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
                style={{ textAlign: window.innerWidth < 640 ? "center" : "justify" }}
                whileHover={{ scale: 1.01, color: '#06b6d4' }}
                whileTap={{ scale: 1.01, color: '#06b6d4' }}
                transition={{ duration: 0.3 }}
              >
                Building User-Centered Digital Solutions Through Code and Design
              </motion.h3>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ textAlign: "justify" }}>
                  I am a Fresh Graduate in Information Systems with one year of hands-on experience in IT Support, web development, and ERP-based systems. Alongside my technical support role, I actively develop and maintain web applications as a Full Stack Developer, working across both front-end and back-end to deliver functional and scalable solutions.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ textAlign: "justify" }}>
                  I have experience translating user and business requirements into clean, efficient code while also designing intuitive and user-friendly interfaces. With a strong interest in UI/UX design, I focus on creating digital products that are not only technically reliable but also easy and enjoyable to use.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ textAlign: "justify" }}>
                  Through my professional experience, I have developed strong problem-solving, communication, and collaboration skills by working closely with clients, designers, and developers. I am motivated to grow as a Junior Full Stack Developer and UI/UX Designer, contributing to impactful and user-centered digital solutions.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-base sm:text-lg mb-3 sm:mb-4 text-gray-900">Tech Stack Highlights:</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['HTML/CSS', 'Javascript', 'Typescript', 'React', 'Java', 'MySQL/SQL', 'ERP', 'Figma', 'Wordpress', 'Mendix'].map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg text-xs sm:text-sm text-gray-700"
                      variants={techStackVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      custom={index}
                      whileHover={{ scale: 1.05, borderColor: '#06b6d4', rotate: [0, -2, 2, 0] }}

                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
                {[
                  { label: 'Years Experience', value: '2+' },
                  { label: 'Projects Completed', value: '10+' },
                  { label: 'Issues Resolved', value: '30+' },
                  { label: 'Clients Handled', value: '10+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg sm:rounded-xl"
                    variants={statVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}
                    whileHover={{
                      y: window.innerWidth > 640 ? -8 : -4,
                      scale: 1.02,
                      boxShadow: '0 8px 25px rgba(6,182,212,0.2)',
                      borderColor: '#06b6d4',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-1 sm:mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.15 + 0.5, type: "spring" as const, stiffness: 100, damping: 50 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}