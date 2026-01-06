import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Zuhairx', label: 'GitHub'},
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/zuhair704', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/zuu.site', label: 'Instagram' },
    { Icon: Mail, href: 'zuhairyuliansyah688@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <motion.div
              className="text-3xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {'<ZuuPortofolio/>'}
            </motion.div>

            <motion.div
              className="flex gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map(({ Icon, href, label }, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={href}
                      aria-label={label}
                      className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400  transition-all"
                      whileHover={{ scale: 1.1, rotate: 5,
                        backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
                    color: "#ffffff",
                    borderWidth: 0
                      }}
                      whileTap={{ scale: 0.9,
                    rotate: 5,
                    backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)",
                    color: "#ffffff",
                    borderWidth: 0
                   }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      target="_blank"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>

            <motion.div
              className="text-center text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="mb-2">
                Built with React, TypeScript & Tailwind CSS
              </p>
              <p>
                © {currentYear} {'Zuu Portofolio'}. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}