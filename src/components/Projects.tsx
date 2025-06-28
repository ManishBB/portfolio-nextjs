'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Play } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Real-Time Collaborative Whiteboard',
      description: 'A multi-user collaborative whiteboard with real-time synchronization using WebSockets. Features user authentication, room-based collaboration, and chat integration. Uses AWS S3 for storing drawings and Redis for optimizing real-time updates.',
      technologies: ['Next.js', 'NestJS', 'WebSockets', 'PostgreSQL', 'AWS S3', 'Redis', 'Docker', 'Kubernetes', 'TypeScript'],
      liveDemo: '#',
      github: '#',
      color: 'from-blue-500 to-purple-600',
      icon: '🎨'
    },
    {
      title: 'Event Booking Platform',
      description: 'Full-stack event booking platform with real-time seat availability and payment processing.',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Kafka', 'Stripe'],
      liveDemo: '#',
      github: '#',
      color: 'from-green-500 to-teal-600',
      icon: '🎫'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Comprehensive admin dashboard for e-commerce management with analytics and inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'Socket.io'],
      liveDemo: '#',
      github: '#',
      color: 'from-orange-500 to-red-600',
      icon: '📊'
    }
  ]

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description
    return description.substring(0, maxLength) + '...'
  }

  const renderTechnologies = (technologies: string[], index: number) => {
    const maxVisible = 4
    const visibleTechs = technologies.slice(0, maxVisible)
    const hiddenTechs = technologies.slice(maxVisible)

    return (
      <div className="flex flex-wrap gap-2 relative">
        {visibleTechs.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border-0">
            {tech}
          </Badge>
        ))}
        {hiddenTechs.length > 0 && (
          <div className="relative">
            <Badge 
              variant="secondary" 
              className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              +{hiddenTechs.length}
            </Badge>
            
            {/* Popup for hidden technologies */}
            {hoveredProject === index && (
              <div className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50 min-w-max">
                <div className="flex flex-wrap gap-2">
                  {hiddenTechs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-slate-800"></div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-40 z-0"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl opacity-30 z-0"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
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
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                {/* Project Preview */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative group-hover:scale-105 transition-transform duration-500 overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                    {truncateDescription(project.description)}
                  </p>

                  {/* Technologies */}
                  <div className="flex-shrink-0">
                    {renderTechnologies(project.technologies, index)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2 flex-shrink-0">
                    <Button
                      onClick={() => window.open(project.liveDemo, '_blank')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Want to see more projects?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Check out my GitHub profile for more projects and contributions
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://github.com/ManishBB', '_blank')}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-medium"
              >
                <Github className="h-5 w-5 mr-2" />
                View More Projects on GitHub
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 