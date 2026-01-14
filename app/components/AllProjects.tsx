import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useNavigate } from 'react-router-dom';
import img1 from '../components/image/p1.png'
import img2 from '../components/image/p2.png'
import img3 from '../components/image/p3.png'
import img4 from '../components/image/p4.png'
import img5 from '../components/image/p5.png'
import img6 from '../components/image/p6.png'

export function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const projects = [

    {
      title: 'Stockwise',
      description: 'StockWise is an inventory management application built using JavaFX and MySQL designed to help businesses manage product inventory, incoming and outgoing transactions, and user management easily and efficiently.',
      image: img1,
      tags: ['javaFX', 'CRUD', 'GUI', 'MySQL'],
      gradient: 'from-red-500 to-orange-500',
      githubHref: 'https://github.com/Zuhairx/Stockwise-Version-1.0.git',
    },

    {
      title: 'Pudding Data Management System',
      description: 'A Java Swing desktop application integrated with MySQL that allows users to manage menu data through a graphical interface, supporting full CRUD operations, input validation, and real-time database updates.',
      image: img1,
      tags: ['java Swing', 'CRUD', 'GUI', 'MySQL'],
      gradient: 'from-red-500 to-orange-500',
      githubHref: 'https://github.com/Zuhairx/Pudding-Menu-Management-System.git',
    },

    {
      title: 'Employee Data Management System',
      description: 'A Java Console-based application for managing company employee data, including CRUD (Create, Read, Update, Delete) features, input validation, job grouping, and automatic salary and bonus calculations based on the number of employees per position.',
      image: img3,
      tags: ['java', 'OOP', 'CRUD', 'Console App'],
      gradient: 'from-red-500 to-orange-500',
      githubHref: 'https://github.com/Zuhairx/Employee-Data-Management-System.git',
    },
    {
      title: 'Achord.Fly',
      description: 'Comprehensive component library with documentation, accessibility features, and design tokens for enterprise use.',
      image: img4,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/ENJQjkx7BlkfaBFj7VAMNh/Achordly?node-id=0-1&t=hRKBitLN24v3G3Qt-1'
    },
    {
      title: 'Fityhealty',
      description: 'Intelligent project management tool with AI-powered task prioritization, team collaboration, and productivity analytics.',
      image: img5,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/J6fWDnQzxzGs6ddHnTGStH/FityHealthy?node-id=0-1&t=jwpvVzm9W8tuorGc-1'
    },
    {
      title: 'Joridz Fashion',
      description: 'Fashion design and branding project showcasing creative UI/UX concepts and modern design principles.',
      image: img6,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/0AKUUrOc30rxBkeLJih4k3/Sketch-Jordiz-s-Fashion?node-id=0-1&t=roLDeWn3cU7xLmol-1'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section ref={ref} className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cyan-500 text-sm tracking-wider uppercase mb-2 block">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-white">All My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore my complete collection of projects, from web applications to design prototypes and everything in between.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700/50 h-full flex flex-col"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>

                    {(project.githubHref || project.externalHref) && (
                      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 flex items-end justify-center gap-4 pb-6 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        {project.githubHref && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <motion.a
                                href={project.githubHref}
                                target='_blank'
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors"
                                whileHover={{
                                  scale: 1.1, rotate: 5,
                                  backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
                                  color: "#ffffff",
                                  borderWidth: 0
                                }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Github className="w-5 h-5" />
                              </motion.a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {project.externalHref && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <motion.a
                                href={project.externalHref}
                                target='_blank'
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors"
                                whileHover={{
                                  scale: 1.1, rotate: 5,
                                  backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
                                  color: "#ffffff",
                                  borderWidth: 0
                                }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Prototype</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
