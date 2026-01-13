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

  const certifications = useMemo(() => [
    {
      title: "AWS Academy Graduate - Cloud Architecture",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 2025",
      category: "Cloud",
      level: "Graduate",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "Amazon Web Services Training and Certification", 
      date: "Apr 2025",
      category: "AI/ML",
      level: "Graduate",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "NPTEL (IIT/IISc)",
      date: "2025",
      category: "AI/ML",
      level: "Academic",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    {
      title: "C Programming and Assembly Language",
      issuer: "NPTEL (IIT/IISc)",
      date: "2024", 
      category: "Programming",
      level: "Academic",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 2025", 
      category: "Cloud",
      level: "Graduate",
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      date: "May 2025",
      category: "Security",
      level: "Career Path",
      color: "bg-red-500/20 text-red-300 border-red-500/30"
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "Feb 2025",
      category: "Programming",
      level: "Essentials",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "May 2025",
      category: "AI/ML", 
      level: "Foundational",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google Cloud",
      date: "Sep 2024",
      category: "AI/ML",
      level: "Skill Badge",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    {
      title: "Network Technician Career Path", 
      issuer: "Cisco",
      date: "Nov 2024",
      category: "Networking",
      level: "Career Path",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
    }
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
    <section id="certifications" className="py-16" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and skill validations across cloud computing, AI/ML, cybersecurity, and software development
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="card-glow h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <Badge className={cert.color} variant="outline">
                      {cert.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Issued {cert.date}</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 border-blue-500/20">
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
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