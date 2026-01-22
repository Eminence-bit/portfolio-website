"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { CalendarDays } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PositionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const positions = [
    {
      title: "Backend Developer Intern",
      organization: "Springer Capital",
      period: "Dec 2024 - Present",
      description:
        "Remote backend development internship at Springer Capital, a real estate investment and advisory group with global operations in Hong Kong, China, and North America. Contributing to backend systems and infrastructure for real estate investment platforms and advisory services.",
      skills: ["Backend Development", "Real Estate Technology", "Investment Platforms", "Remote Work"],
    },
    {
      title: "Member",
      organization: "VoidX Technologies",
      period: "2025 - Present",
      description:
        "Member of VoidX Technologies, a technology collective and innovation engine that explores, prototypes, and scales ideas from first principles. Contributing to projects that combine disciplined execution with relentless iteration in AI/ML and full-stack development.",
      skills: ["AI/ML Systems", "Full-Stack Development", "Research-to-Production", "Innovation"],
    },
    {
      title: "Technical Lead",
      organization: "Aarna Club",
      period: "Jan 2025 - Present",
      description:
        "Leading technical initiatives and projects, mentoring team members, and implementing innovative solutions to enhance club activities.",
      skills: ["Leadership", "Technical Planning", "Mentoring"],
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
    <section id="positions" className="py-20" ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center" variants={itemVariants}>
          Positions & Achievements
        </motion.h2>
        <motion.div className="space-y-8" variants={containerVariants}>
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="card-glow border-primary/10">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold">{position.title}</CardTitle>
                      <CardDescription className="text-base mt-1 text-primary">{position.organization}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2 py-1 px-3 border-border bg-background/50">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {position.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * skillIndex }}
                      >
                        <Badge variant="secondary" className="bg-secondary/50 font-normal">
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

