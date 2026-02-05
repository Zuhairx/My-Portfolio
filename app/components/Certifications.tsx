import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { certificationsData } from './certificationsData';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const navigate = useNavigate();

  const Certificate = certificationsData;

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
                          <motion.button
                            onClick={() => setSelectedCertificate(certificate)}
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
                          </motion.button>
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

        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-0 m-0 overflow-hidden z-50">
            <div className="relative w-full h-full flex items-center justify-center flex-col gap-4 text-sm lg:text-base">
              {selectedCertificate.externalHref.endsWith('.pdf') ? (
              <object
                data={selectedCertificate.externalHref}
                type="application/pdf"
                className="w-full max-w-4xl h-[90vh]"
                title={selectedCertificate.title}
              />
              ) : (
                <img
                  src={selectedCertificate.externalHref}
                  alt={selectedCertificate.title}
                  className="max-w-[80%] max-h-[70vh] lg:max-h-[80vh] object-contain"
                />
              )}
              <div className="flex justify-center items-center gap-4">
                <p className="text-white p-2 bg-black/80 text-center">{selectedCertificate.title}</p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-white w-10 h-10 bg-black/50 rounded-full hover:bg-black/80 font-bold"
                title="Close"
              >
                x
              </button>
            </div>
          </div>
        )}

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/AllCertification')}
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
            View All Certifications
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
