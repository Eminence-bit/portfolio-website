"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

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

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5 mr-3" />,
      text: "prajyothnani123@gmail.com",
      href: "mailto:prajyothnani123@gmail.com",
    },
    {
      icon: <Github className="h-5 w-5 mr-3" />,
      text: "github.com/Eminence-bit",
      href: "https://github.com/Eminence-bit",
    },
    {
      icon: <Linkedin className="h-5 w-5 mr-3" />,
      text: "linkedin.com/in/prajyoth-gandam",
      href: "https://www.linkedin.com/in/prajyoth-gandam-86005a395",
    },
  ]

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center" variants={itemVariants}>
          Get In Touch
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Card className="h-full card-glow border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Contact Form</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-input focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="bg-background/50 border-input focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      required
                      className="bg-background/50 border-input focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm resize-none"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full rounded-full shadow-lg hover:shadow-primary/20" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="w-4 h-4 ml-1" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                  {submitSuccess && (
                    <motion.p
                      className="text-green-500 text-sm mt-2 text-center font-medium bg-green-500/10 py-2 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full card-glow border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Connect With Me</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors border border-transparent hover:border-primary/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="text-primary mr-4 p-2 bg-primary/10 rounded-full">
                      {link.icon}
                    </div>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link.text}
                    </a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

