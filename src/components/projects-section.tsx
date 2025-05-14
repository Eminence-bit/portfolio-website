"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const projects = [
    {
      title: "3D Reconstruction from Single Images",
      description:
        "An end-to-end pipeline for transforming 2D images into textured 3D models using AI-powered computer vision techniques. Implements object segmentation, depth estimation, view synthesis, voxel grid creation, and texture mapping to generate detailed 3D representations from single photographs.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Computer Vision", "Deep Learning", "PyTorch", "3D Modeling", "Mask R-CNN", "MiDaS", "Open3D", "CUDA", "Python"],
      github: "https://github.com/eminence-bit/single-image-3d-reconstruction",
      demo: "https://your-demo-link.com",
      status: "Completed",
      date: "2024",
    },
    {
      title: "Hackathon at Woxsen University",
      description:
        "Participated in a 24-hour hackathon with a team of 5 to build an automated data preprocessing and feature selection model. The solution streamlined the data preparation process and improved model accuracy through intelligent feature engineering.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Hackathon", "Data Science", "Machine Learning", "Team Project"],
      github: "https://github.com/eminence-bit/hackathon-project",
      demo: "https://your-demo-link.com",
      status: "Completed",
      date: "2023",
    },
    {
      title: "Personalized Learning Companion",
      description:
        "A college project involving the creation of an AI-based tool for adaptive learning. The system analyzes student performance and learning patterns to provide personalized content recommendations and study plans, enhancing the educational experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education Tech", "AI", "Adaptive Learning", "User Experience"],
      github: "https://github.com/eminence-bit/learning-companion",
      demo: "https://your-demo-link.com",
      status: "Completed",
      date: "2023",
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
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">Projects & Interests</h2>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work and personal projects
          </p>
        </motion.div>
        <motion.div className="space-y-12" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <div className="h-full w-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span>{project.status}</span>
                            <span>•</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <div key={tagIndex}>
                            <Badge variant="outline" className="text-sm">{tag}</Badge>
                          </div>
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

