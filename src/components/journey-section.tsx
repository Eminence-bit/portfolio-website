"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Development":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Research":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
    }
  }

  return (
    <section id="journey" className="py-16" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key phases in my AI/ML engineering development
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants}>
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="card-glow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTypeColor(step.type)}>{step.type}</Badge>
                        <Badge variant="outline" className="text-blue-300 border-blue-500/30">
                          {step.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-1">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      >
                        <Badge variant="secondary" className="badge-blue-light">
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