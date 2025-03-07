"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { CalendarDays } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PositionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const positions = [
    {
      title: "Technical Lead",
      organization: "Aarna Club",
      period: "Jan 2025 - Present",
      description:
        "Leading technical initiatives and projects, mentoring team members, and implementing innovative solutions to enhance club activities.",
      skills: ["Leadership", "Technical Planning", "Mentoring"],
    },
    {
      title: "Technical Lead",
      organization: "Suraksha Club",
      period: "Jan 2025 - Present",
      description:
        "Overseeing technical aspects of security-focused projects, coordinating with team members, and ensuring the implementation of best practices in cybersecurity.",
      skills: ["Cybersecurity", "Team Coordination", "Technical Oversight"],
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="positions" className="py-16" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Positions & Achievements
        </motion.h2>
        <motion.div className="space-y-6" variants={containerVariants}>
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{position.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{position.organization}</CardDescription>
                    </div>
                    <motion.div
                      className="flex items-center text-sm text-muted-foreground"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {position.period}
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
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

