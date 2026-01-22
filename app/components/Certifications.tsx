import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useNavigate } from 'react-router-dom';
import img1 from '../components/image/badge/b1.png';
import ext1 from '../components/image/Certificates/c1.pdf';
import img2 from '../components/image/badge/b2.png';
import ext2 from '../components/image/Certificates/c2.jpg';
import img3 from '../components/image/badge/b3.png';
import ext3 from '../components/image/Certificates/c3.pdf';
import img4 from '../components/image/badge/b4.png';
import ext4 from '../components/image/Certificates/c4.pdf';
import img5 from '../components/image/badge/b5.png';
import ext5 from '../components/image/Certificates/c5.pdf';
import img6 from '../components/image/badge/b6.png';
import ext6 from '../components/image/Certificates/c6.pdf';



export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const Certificate = [

    {
      title: 'Google Prompting Essentials',
      description:
        '<strong>Certification ID :</strong> QC1RG2SZELO5 <br> <strong>Obtained Date :</strong> January 16, 2026<br><strong>Issued by :</strong> Google',
      image: img6,
      tags: ['Generative AI', 'Prompt Engineering','Multimodal Prompting'],
      gradient: 'from-orange-400 to-amber-400',
      externalHref: ext6,
    },

       {
      title: 'Google AI Essentials',
      description:
        '<strong>Certification ID :</strong> EP3JADT5R7H2 <br> <strong>Obtained Date :</strong> January 14, 2026<br><strong>Issued by :</strong> Google',
      image: img5,
      tags: ['Generative AI', 'Machine Learning', 'NLP','LLM'],
      gradient: 'from-orange-400 to-amber-400',
      externalHref: ext4,
    },

    {
      title: 'Research Paper',
      description:
        '<strong>Certification ID :</strong> 002 <br> <strong>Obtained Date :</strong> August 29, 2024<br><strong>Issued by :</strong> ICIMTECH',
      image: img3,
      tags: ['Research', 'Publication', 'Data Analysis' ],
      gradient: 'from-blue-500 to-blue-700',
      externalHref: ext3,
    },

     {
      title: 'Research and Web Development',
      description:
        '<strong>Certification ID :</strong> - <br> <strong>Obtained Date :</strong> January 30, 2024<br><strong>Issued by :</strong> Information System Project Member (ISPM)',
      image: img4,
      tags: ['Research', 'Web Development' ],
      gradient: 'from-blue-500 to-blue-700',
      externalHref: ext4,
    },

    {
      title: 'Mendix Rapid Developer',
      description:
        '<strong>Certification ID :</strong> 67694 <br> <strong>Obtained Date :</strong> December 22, 2023<br><strong>Issued by :</strong> Mendix',
      image: img2,
      tags: ['Microflows', 'Workflows', 'UI Design', 'Data Management' ],
      gradient: 'from-green-500 to-emerald-500',
      externalHref: ext2,
    },

     {
      title: 'Java Programming',
      description:
        '<strong>Certification ID :</strong> 025 <br> <strong>Obtained Date :</strong> September 20, 2022<br><strong>Issued by :</strong> Bina nusantara Computer Club (BNCC)',
      image: img1,
      tags: ['Java', 'OOP', 'SQL','Debugging'],
      gradient: 'from-cyan-500 to-blue-500',
      externalHref: ext1,
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Featured Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing my professional certifications and achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Certificate.map((certificate, index) => (
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
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>

                  {certificate.externalHref && (
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 flex items-end justify-center gap-4 pb-6 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            onClick={() => {
                              window.open(certificate.externalHref, '_blank');
                            }}
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
                          <p>Preview Certificate</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl mb-3">{certificate.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1" dangerouslySetInnerHTML={{ __html: certificate.description }}></p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {certificate.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${certificate.gradient} text-white`}
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
  );
}
