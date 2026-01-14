import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      category: 'Development',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      items: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'Javascript', level: 90 },
        { name: 'Typescript', level: 90 },
        { name: 'MySQL/SQL', level: 95 },
        { name: 'React/Node.js', level: 85 },
        { name: 'Java', level: 90 },
      ]
    },
    {
      category: 'UI/UX Design',
      icon: Palette,
      color: 'from-blue-500 to-indigo-500',
      items: [
        { name: 'Figma', level: 96 },
        { name: 'Visual Paradigm', level: 90 },
        { name: 'User Research', level: 87 },
        { name: 'Prototyping', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility', level: 90 },
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      items: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Wordpress', level: 90 },
        { name: 'Mendix', level: 85 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'Testing', level: 95 },
        { name: 'Agile & Scrum', level: 90 },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm tracking-wider uppercase mb-2 block">What I Do</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(6,182,212,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillSet.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skillSet.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl">{skillSet.category}</h3>
                </div>

                <div className="space-y-4">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skillSet.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}