"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Eminence-bit", label: "GitHub" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/prajyoth-gandam-0b9a50323",
      label: "LinkedIn",
    },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:mrhunternani22@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} G Prajyoth. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

