import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useNavigate } from 'react-router-dom';
import img1 from '../components/image//Projects/p1.png';
import img2 from '../components/image/Projects/p2.png';
import img3 from '../components/image/Projects/p3.png';
import img4 from '../components/image/Projects/p4.png';
import img5 from '../components/image/Projects/p5.png';
import img6 from '../components/image/Projects/p6.png';


export function Projects() {
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
      title: 'Lvinnamon',
      description: 'Lvinnamon is a  website for a cinnamon rolls shop built, The website features product listings (Classic, Gourmet, and Vegan), company profile, store location, user registration, and interactive navigation designed to provide an engaging user experience.',
      image: img3,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Web'],
      gradient: 'from-green-400 to-emerald-500',
      githubHref: 'https://github.com/Zuhairx/Lvinnamon.git',
    },


    {
      title: 'Pudding Data Management System',
      description: 'A Java Swing desktop application integrated with MySQL that allows users to manage menu data through a graphical interface, supporting full CRUD operations, input validation, and real-time database updates.',
      image: img2,
      tags: ['java Swing', 'CRUD', 'GUI', 'MySQL'],
      gradient: 'from-red-500 to-orange-500',
      githubHref: 'https://github.com/Zuhairx/Pudding-Menu-Management-System.git',
    },

    {
      title: 'Achord.Fly',
      description: 'Achord.ly is an interactive UI/UX prototype built in Figma for a music learning and chord-sharing platform. The app features chord listings and video tutorials, including recommendations, newest updates, and top singers. It also provides request and contribute features for user-submitted chords, along with a personalized profile.',
      image: img4,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/ENJQjkx7BlkfaBFj7VAMNh/Achordly?node-id=0-1&t=hRKBitLN24v3G3Qt-1'
    },

    {
      title: 'Fityhealty',
      description: 'FityHealthy is a UI/UX prototype designed in Figma for a healthy catering and lifestyle program. The app allows users to manage catering schedules, track progress through charts, receive reminders, and consult with doctors. It also features flexible catering plans (daily, weekly, monthly), menu selection, testimonials, and user profiles.',
      image: img5,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/J6fWDnQzxzGs6ddHnTGStH/FityHealthy?node-id=0-1&t=jwpvVzm9W8tuorGc-1'
    },

    {
      title: 'Jordiz Fashion',
      description: 'Joridz Fashion is a UI/UX prototype for a modern fashion e-commerce experience with curated collections and trending recommendations. It features AI-based virtual fitting that lets users try outfits using photos before purchasing. The application also supports cart, checkout, and user profile interactions for a seamless shopping journey.',
      image: img6,
      tags: ['Figma', 'Prototyping', 'UI/UX'],
      gradient: 'from-violet-500 to-purple-500',
      externalHref: 'https://www.figma.com/proto/0AKUUrOc30rxBkeLJih4k3/Sketch-Jordiz-s-Fashion?node-id=0-1&t=roLDeWn3cU7xLmol-1'
    },

  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm tracking-wider uppercase mb-2 block">My Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Selected projects highlighting my hands-on experience in building scalable applications and intuitive user experiences.
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -10 }}
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
                              target='_blank' rel="noopener noreferrer"
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
                              target='_blank' rel="noopener noreferrer"
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
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/projects')}
            className="border-2 border-cyan-500 text-cyan-400 bg-transparent  px-8 py-4 rounded-lg transition-all shadow-lg shadow-cyan-500/50"
            whileHover={{
              scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
              color: "#ffffff",
              borderWidth: 0,
            }}
            whileTap={{
              scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
              color: "#ffffff",
              borderWidth: 0,
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
