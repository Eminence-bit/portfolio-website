"use client"

import { useRef, useMemo } from "react"
import { Card, CardContent } from "./ui/card"
import { motion, useInView } from "framer-motion"
import { Code, GitBranch, Users, Award } from "lucide-react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = useMemo(() => [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      number: "Multiple",
      label: "Production-Oriented",
      description: "ML systems deployed",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-blue-400" />,
      number: "Research",
      label: "to Production",
      description: "ML systems approach",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      number: "2+",
      label: "Organizations",
      description: "Technical experience",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      number: "Robust",
      label: "Model Behavior",
      description: "Focus on deployment constraints",
    },
  ], [])

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section className="py-16" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="card-glow text-center">
                <CardContent className="p-6">
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-blue-300 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 * index, type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <h4 className="text-lg font-semibold mb-1">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}