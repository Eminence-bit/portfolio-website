"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"

export default function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const journeySteps = [
    {
      year: "2025",
      title: "AI/ML Engineering Focus",
      type: "Current",
      description: "Production-oriented ML systems, research-to-deployment pipelines, and technical leadership roles.",
      skills: ["Production ML", "Research", "Leadership"],
    },
    {
      year: "2024",
      title: "Full-Stack AI Development",
      type: "Development",
      description: "Built end-to-end AI applications combining backend systems with intelligent processing capabilities.",
      skills: ["Full-Stack", "AI Systems", "Deployment"],
    },
    {
      year: "2024",
      title: "Research & Innovation",
      type: "Research",
      description: "Developed novel approaches to ML robustness and hallucination detection in production environments.",
      skills: ["Research", "Innovation", "ML Theory"],
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Development":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Research":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <section id="journey" className="py-20" ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key phases in my AI/ML engineering development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

          <motion.div className="space-y-8" variants={containerVariants}>
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-3xl font-bold font-heading text-primary/20">{step.year}</span>
                  </div>
                </div>

                <div className="relative flex-none">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                </div>

                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="card-glow border-primary/10">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2 md:hidden">
                          <span className="text-xl font-bold font-heading text-primary/40">{step.year}</span>
                          <Badge className={getTypeColor(step.type)} variant="outline">{step.type}</Badge>
                        </div>
                        <div className="hidden md:flex justify-between items-center mb-2">
                          <Badge className={getTypeColor(step.type)} variant="outline">{step.type}</Badge>
                        </div>
                        <CardTitle className="text-xl font-heading">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground leading-relaxed">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-secondary/50 font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}