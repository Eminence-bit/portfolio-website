"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { useMousePosition } from "../lib/use-mouse-position"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const mousePosition = useMousePosition()

  const projects = [
    {
      title: "AI-Powered 3D Model Generation",
      description:
        "A cutting-edge project focused on 2D-to-3D model generation using GANs, PyTorch, and TensorFlow. The project explores depth estimation techniques like DPT and MiDaS, as well as 3D reconstruction methods including 3D-GAN, NeRF, and SF3D.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "3D Modeling", "PyTorch", "TensorFlow", "GANs"],
    },
    {
      title: "Hackathon at Woxsen University",
      description:
        "Participated in a 24-hour hackathon with a team of 5 to build an automated data preprocessing and feature selection model. The solution streamlined the data preparation process and improved model accuracy through intelligent feature engineering.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Hackathon", "Data Science", "Machine Learning", "Team Project"],
    },
    {
      title: "Personalized Learning Companion",
      description:
        "A college project involving the creation of an AI-based tool for adaptive learning. The system analyzes student performance and learning patterns to provide personalized content recommendations and study plans, enhancing the educational experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education Tech", "AI", "Adaptive Learning", "User Experience"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-16" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Projects & Interests
        </motion.h2>
        <motion.div className="space-y-12" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              style={{
                transform:
                  mousePosition.x && mousePosition.y
                    ? `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) / 100}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) / 100}deg)`
                    : "none",
                transition: "transform 0.1s ease-out",
              }}
            >
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="h-full w-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * tagIndex }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                          >
                            <Badge variant="outline">{tag}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

