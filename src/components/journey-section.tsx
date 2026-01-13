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
      title: "Backend Developer Intern",
      company: "Springer Capital",
      location: "Remote",
      type: "Professional",
      description: "Contributing to backend systems for real estate investment platforms with global operations.",
      skills: ["Backend Development", "Real Estate Tech", "Remote Collaboration"],
      current: true,
    },
    {
      year: "2025",
      title: "AI/ML Research & Development",
      company: "Independent Projects",
      location: "Research",
      type: "Research",
      description: "Developed production-ready AI systems including AKGC framework and rockfall prediction models. Research paper for AKGC currently in progress for publication.",
      skills: ["PyTorch", "Knowledge Graphs", "Computer Vision", "Production ML", "Research Publication"],
      current: true,
    },
    {
      year: "2025",
      title: "VoidX Technologies Member",
      company: "VoidX Technologies",
      location: "Technology Collective",
      type: "Innovation",
      description: "Contributing to cutting-edge projects that combine disciplined execution with innovation.",
      skills: ["Full-Stack Development", "AI/ML Systems", "Innovation"],
      current: true,
    },
    {
      year: "2025",
      title: "Technical Leadership",
      company: "Aarna Club",
      location: "Leadership",
      type: "Leadership",
      description: "Leading technical initiatives and mentoring team members in innovative projects.",
      skills: ["Leadership", "Mentoring", "Technical Planning"],
      current: true,
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
      case "Professional":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Research":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Innovation":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Leadership":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
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
            My path through AI/ML engineering, research, and technical leadership
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
              <Card className={`card-glow relative ${step.current ? 'ring-2 ring-blue-500/50' : ''}`}>
                {step.current && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-blue-500 text-white">Current</Badge>
                  </div>
                )}
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {step.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {step.location}
                        </div>
                      </div>
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