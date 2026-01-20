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
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const projects = [
    {
      title: "🧠 Adaptive Knowledge-Guided Correction (AKGC)",
      description:
        "A production-oriented framework for detecting and correcting hallucinations in Large Language Models. Demonstrates research-to-production ML systems with robust evaluation methodology and deployment-aware engineering constraints.",
      tags: ["Python", "DistilBERT", "Knowledge Graphs", "FastAPI", "Docker", "PyTorch", "REST API", "Machine Learning"],
      github: "https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_",
      demo: "https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_",
      status: "Flagship Project",
      date: "2025",
      flagship: true,
    },
    {
      title: "🏔️ Rockfall Prediction Model",
      description:
        "A comprehensive machine learning system for predicting rockfall risks in open-pit mines using multi-modal data analysis. Demonstrates robust model performance on domain-specific mining datasets through advanced feature engineering and ensemble methods.",
      tags: ["Python", "Random Forest", "Gradient Boosting", "Computer Vision", "Satellite Imagery", "Neural Networks"],
      github: "https://github.com/Eminence-bit/Rockfall-Prediction-Model",
      demo: "https://github.com/Eminence-bit/Rockfall-Prediction-Model",
      status: "Completed",
      date: "2024",
    },
    {
      title: "🌐 Seeker Nexus AI",
      description:
        "A comprehensive AI-powered job portal with resume screening capabilities. Combines Python backend with LangGraph agents and modern React frontend to provide intelligent job matching and resume analysis with multi-format support and real-time processing.",
      tags: ["Python", "FastAPI", "LangGraph", "React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "AI Agents"],
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
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg">
            Production-oriented machine learning systems and technical projects
          </p>
        </motion.div>
        <motion.div className="space-y-12" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className={`overflow-hidden ${project.flagship ? 'ring-2 ring-blue-500/50 bg-gradient-to-br from-blue-500/5 to-purple-500/5' : ''} card-glow`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        {project.flagship && (
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30" variant="outline">
                            Flagship
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${project.flagship ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-500/20 text-blue-300'}`}>{project.status}</span>
                        <span>•</span>
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-blue-500/20" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-blue-500/20" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                      {project.flagship && (
                        <Button variant="ghost" size="icon" className="hover:bg-blue-500/20" asChild>
                          <Link to="/projects/akgc">
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <div key={tagIndex}>
                        <Badge variant="outline" className="text-sm badge-blue-light">{tag}</Badge>
                      </div>
                    ))}
                  </div>
                  {project.flagship && (
                    <div className="mt-4">
                      <Button asChild className="w-full">
                        <Link to="/projects/akgc">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          View Technical Deep Dive
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

