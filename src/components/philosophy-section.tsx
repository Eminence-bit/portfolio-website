"use client"

import { useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { motion, useInView } from "framer-motion"
import { Brain, Zap, Target, Lightbulb } from "lucide-react"

export default function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const principles = [
    {
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      title: "Research-Driven Decisions",
      description: "Demonstrated through AKGC's knowledge-guided correction pipeline and algorithmic approach to hallucination detection.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Production-Oriented Systems",
      description: "Building deployable ML systems that balance accuracy, latency, and maintainability constraints in real-world environments.",
    },
    {
      icon: <Target className="h-6 w-6 text-blue-400" />,
      title: "Robustness Focus",
      description: "Rockfall prediction model demonstrates robust performance across varied terrain and mining conditions through careful evaluation.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
      title: "End-to-End Delivery",
      description: "Seeker Nexus AI showcases full-stack AI system integration from ML logic to usable application deployment.",
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="philosophy" className="py-16" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">My Philosophy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My approach to building machine learning systems, demonstrated through specific project decisions and technical choices.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="card-glow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 p-2 bg-blue-500/20 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {principle.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
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