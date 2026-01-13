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
      icon: <Cpu className="h-5 w-5" />,
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP", "Knowledge Graphs", "Neural Networks"],
    },
    {
      category: "Programming",
      icon: <Code className="h-5 w-5" />,
      items: ["Python", "JavaScript", "TypeScript", "C", "Java", "React", "Node.js"],
    },
    {
      category: "Systems & Tools",
      icon: <Server className="h-5 w-5" />,
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
            I design and build machine-learning systems that combine algorithmic rigor, real-world data, and deployable software.
            My work spans research-inspired ML models, predictive analytics on real datasets, and full-stack AI applications.
            I am reserved in casual settings but direct, technical, and collaborative in project and work environments.
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
              <Card className="h-full overflow-hidden card-glow">
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 * skillIndex }}
                      >
                        <Badge variant="secondary" className="badge-blue-light">{skill}</Badge>
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

