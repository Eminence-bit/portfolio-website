"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "Adaptive Knowledge-Guided Correction",
      description:
        "A production-oriented framework for detecting and correcting hallucinations in Large Language Models. Demonstrates research-to-production ML systems with robust evaluation methodology.",
      tags: ["Python", "DistilBERT", "Knowledge Graphs", "FastAPI", "Docker", "PyTorch"],
      github: "https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_",
      demo: "https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_",
      status: "Flagship Project",
      date: "2025",
      flagship: true,
    },
    {
      title: "Rockfall Prediction Model",
      description:
        "Comprehensive machine learning system for predicting rockfall risks in open-pit mines using multi-modal data analysis and computer vision.",
      tags: ["Python", "Random Forest", "Computer Vision", "Satellite Imagery"],
      github: "https://github.com/Eminence-bit/Rockfall-Prediction-Model",
      demo: "https://github.com/Eminence-bit/Rockfall-Prediction-Model",
      status: "Completed",
      date: "2024",
    },
    {
      title: "Seeker Nexus AI",
      description:
        "AI-powered job portal offering intelligent job matching and resume analysis using LangGraph agents and modern React frontend.",
      tags: ["Python", "LangGraph", "React", "TypeScript", "Supabase"],
      github: "https://github.com/Eminence-bit/seeker-nexus-ai",
      demo: "https://github.com/Eminence-bit/seeker-nexus-ai",
      status: "Completed",
      date: "2024",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 relative" ref={ref}>


      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-oriented machine learning systems and technical projects showcasing
            deployment-aware engineering.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-8" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`overflow-hidden transition-all duration-300 ${project.flagship
                  ? 'border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background shadow-xl'
                  : 'bg-card/50 hover:bg-card/80'} card-glow`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-heading font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.flagship && (
                            <Badge variant="default" className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/30">
                              Flagship
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground hidden sm:inline-block">{project.date}</span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary/50 backdrop-blur-sm border-white/5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      </Button>
                      {project.flagship && (
                        <Button size="sm" className="ml-auto gap-2 rounded-full shadow-lg hover:shadow-primary/25" asChild>
                          <Link to="/projects/akgc">
                            Case Study <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
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

