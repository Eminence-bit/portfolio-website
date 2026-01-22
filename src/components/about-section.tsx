"use client"

import { useRef, useMemo } from "react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Server, Cpu } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = useMemo(() => [
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP", "Knowledge Graphs", "Neural Networks"],
    },
    {
      category: "Programming",
      icon: <Code className="h-5 w-5 text-primary" />,
      items: ["Python", "JavaScript", "TypeScript", "C", "Java", "React", "Node.js"],
    },
    {
      category: "Systems & Tools",
      icon: <Server className="h-5 w-5 text-primary" />,
      items: ["FastAPI", "Docker", "AWS", "MongoDB", "PostgreSQL", "Git", "REST APIs"],
    },
  ], [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div className="prose dark:prose-invert max-w-3xl mx-auto mb-16 text-center leading-relaxed" variants={itemVariants}>
          <p className="text-xl text-muted-foreground">
            I design and build production-oriented machine learning systems where model behavior, robustness, and deployment constraints actually matter.
            My work focuses on translating research-inspired ML ideas into practical pipelines, working with real-world data, and shipping systems that balance accuracy, latency, and maintainability.
          </p>
        </motion.div>

        <motion.h3 className="text-2xl font-bold font-heading mb-8 text-center" variants={itemVariants}>
          Skills & Expertise
        </motion.h3>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full overflow-hidden card-glow border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skillGroup.icon}
                    </motion.div>
                    <h4 className="text-lg font-heading font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 * skillIndex }}
                      >
                        <Badge variant="secondary" className="bg-secondary/50 hover:bg-primary/10 transition-colors border-transparent hover:border-primary/20">
                          {skill}
                        </Badge>
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

