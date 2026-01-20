"use client"

import { useRef, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, useInView } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications = useMemo(() => ({
    "Cloud & Infrastructure": [
      {
        title: "AWS Academy Graduate - Cloud Architecture",
        issuer: "Amazon Web Services Training and Certification",
        date: "May 2025",
        level: "Graduate",
      },
      {
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services Training and Certification",
        date: "May 2025", 
        level: "Graduate",
      },
    ],
    "AI/ML & Data Science": [
      {
        title: "AWS Academy Graduate - Machine Learning Foundations",
        issuer: "Amazon Web Services Training and Certification", 
        date: "Apr 2025",
        level: "Graduate",
      },
      {
        title: "Introduction to Large Language Models",
        issuer: "NPTEL (IIT/IISc)",
        date: "2025",
        level: "Academic",
      },
      {
        title: "Getting Started with Artificial Intelligence",
        issuer: "IBM SkillsBuild",
        date: "May 2025",
        level: "Foundational",
      },
      {
        title: "Develop GenAI Apps with Gemini and Streamlit",
        issuer: "Google Cloud",
        date: "Sep 2024",
        level: "Skill Badge",
      },
    ],
    "Programming & Security": [
      {
        title: "C Programming and Assembly Language",
        issuer: "NPTEL (IIT/IISc)",
        date: "2024", 
        level: "Academic",
      },
      {
        title: "JavaScript Essentials 1",
        issuer: "Cisco",
        date: "Feb 2025",
        level: "Essentials",
      },
      {
        title: "Junior Cybersecurity Analyst Career Path",
        issuer: "Cisco",
        date: "May 2025",
        level: "Career Path",
      },
      {
        title: "Network Technician Career Path", 
        issuer: "Cisco",
        date: "Nov 2024",
        level: "Career Path",
      },
    ],
  }), [])

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
    <section id="certifications" className="py-16" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Supporting credentials across cloud computing, AI/ML, and software development
          </p>
        </motion.div>

        <motion.div className="space-y-8" variants={containerVariants}>
          {Object.entries(certifications).map(([category, certs], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="card-glow h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <Award className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30" variant="outline">
                            {cert.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground font-medium">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>Issued {cert.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="border-blue-500/30 hover:bg-blue-500/10" asChild>
              <a 
                href="https://www.credly.com/users/prajyothnani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Credly Badges
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Additional NPTEL certificates available upon request
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}