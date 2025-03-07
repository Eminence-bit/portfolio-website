"use client"

import { useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Server, Cpu } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const skills = [
    {
      category: "Programming",
      icon: <Code className="h-5 w-5" />,
      items: ["C", "Java", "HTML", "CSS", "JavaScript", "MongoDB", "Node.js"],
    },
    {
      category: "Development",
      icon: <Server className="h-5 w-5" />,
      items: ["React Native", "Flask", "Firebase", "Expo", "Web development"],
    },
    {
      category: "AI & ML",
      icon: <Cpu className="h-5 w-5" />,
      items: ["Model training", "Prompt engineering", "Automation"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div className="prose dark:prose-invert max-w-none mb-12" variants={itemVariants}>
          <p className="text-lg">
            I'm a passionate developer with expertise in full-stack development and AI/ML. With a strong foundation in
            various programming languages and frameworks, I enjoy building innovative solutions that solve real-world
            problems.
          </p>
        </motion.div>

        <motion.h3 className="text-2xl font-bold mb-6" variants={itemVariants}>
          Skills & Expertise
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      {skillGroup.icon}
                    </motion.div>
                    <h4 className="text-xl font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

