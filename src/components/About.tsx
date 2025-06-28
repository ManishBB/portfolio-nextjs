'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { GraduationCap, Award, Code, Database, Cloud, Globe } from 'lucide-react'

const About = () => {
  const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'NoSQL'],
    'Frontend': ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
    'Backend': ['Node.js', 'NestJS', 'GraphQL', 'Express.js'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Redis'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'NGINX'],
    'Other': ['WebSockets', 'Kafka', 'Stripe', 'REST APIs']
  }

  const education = [
    {
      degree: 'BE in Computer Science',
      school: 'AISSMS Institute of Information Technology, Pune',
      period: 'Jan 2021 – June 2023',
      details: 'GPA: 9.1/10 | Relevant Coursework: Computer Architecture, Machine Learning Algorithms, Computational Theory, Cloud Computing, Data Science'
    },
    {
      degree: 'Diploma in Computer Engineering',
      school: 'Government Polytechnic, Dhule',
      period: 'Aug 2017 – Nov 2020',
      details: 'Percentile: 91.89 | Relevant Coursework: Data Structures, Operating Systems, DBMS'
    }
  ]
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute left-[-10%] top-1/3 w-[400px] h-[400px] bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-40 z-0"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute right-[-10%] bottom-0 w-[300px] h-[300px] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl opacity-30 z-0"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate software engineer with expertise in full-stack development, 
            specializing in modern web technologies and scalable applications.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              Education
            </h3>
            <p className="text-slate-600 dark:text-slate-400">My academic background and qualifications</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card modern-card"
              >
                <Card className="bg-transparent shadow-none border-0 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.period}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-green-600" />
              Skills & Technologies
            </h3>
            <p className="text-slate-600 dark:text-slate-400">Technologies and tools I work with</p>
          </div>
          <div className="glass-card modern-card">
            <Card className="bg-transparent shadow-none border-0">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                        {category === 'Languages' && <Code className="h-4 w-4 text-blue-500" />}
                        {category === 'Frontend' && <Globe className="h-4 w-4 text-green-500" />}
                        {category === 'Backend' && <Code className="h-4 w-4 text-purple-500" />}
                        {category === 'Databases' && <Database className="h-4 w-4 text-orange-500" />}
                        {category === 'Cloud & DevOps' && <Cloud className="h-4 w-4 text-indigo-500" />}
                        {category === 'Other' && <Code className="h-4 w-4 text-pink-500" />}
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg">
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 