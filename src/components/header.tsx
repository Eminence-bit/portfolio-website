"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useMousePosition } from "../lib/use-mouse-position"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mousePosition = useMousePosition()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = ["about", "projects", "certifications", "philosophy", "journey", "positions", "contact"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.div
        className={cn(
          "w-full max-w-5xl rounded-full transition-all duration-300 border",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-lg py-2 px-6"
            : "bg-transparent border-transparent py-4 px-6"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-heading font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-300">
              G Prajyoth
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((section) => (
              <Button
                key={section}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium hover:bg-primary/10 hover:text-primary rounded-full px-4 transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
            <div className="pl-2 border-l border-border/50 ml-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full hover:bg-primary/10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-xl rounded-3xl border border-border/50 p-6 shadow-2xl md:hidden"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-left font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content (kept in Header component as requested, but refactored style) */}
      <div className="absolute top-0 left-0 w-full min-h-screen -z-10 flex flex-col justify-center items-center pointer-events-none">
        {/* This empty div is just a placeholder to maintain the structure if other components rely on Header wrapping the hero, 
             though ideally Hero should be separate. For now, we follow existing pattern but make it separate in DOM flow if possible?
             Actually, let's keep the hero separate in the main page flow and remove it from the fixed header to avoid layout issues.
             Wait, the original file had the Hero INSIDE the Header component. 
             That is bad practice for a fixed header. I will remove the Hero from the Header component 
             and let a separate HeroSection component handle it, OR I need to include it here but handle the fixed positioning correctly.
             
             Looking at App.tsx, <Header /> is at the top. 
             If I make Header fixed, the content below it will jump up.
             
             Let's put the Hero back in here but styled better, OR better yet, 
             since I'm refactoring, let's move the Hero content to a new HeroSection component 
             and leave Header as just the navigation.
             
             However, App.tsx expects Header to potentially contain it? No, App.tsx has:
             <Header />
             <div className="container...">
                <AboutSection />
             </div>
             
             The original Header component INCLUDED the Hero section at the bottom (lines 134-188).
             If I remove it, the Hero is gone.
             I should probably extract it or keep it.
             For this step, I will keep it in this file but treat it as the Hero Section rendered adjacent to the nav.
             Actually, since I made the header fixed, I should render the Hero section below it with padding.
          */}
      </div>
    </header>
  )
}

// Breaking out Hero to be used in App.tsx or just rendered here contextually?
// The user asked to "Refactor Header". If I remove the Hero part, I need to add it back somewhere.
// Let's create a "HeroSection" component in this same file and export it, or just render it below the fixed nav.
// But wait, the previous return returned fixed/sticky header?
// Original code: className={cn("w-full transition-all...", isScrolled ? ... : ...)} -> It wasn't fixed, it was just relative/block.
// But my new design is "floating pill", which implies fixed.
// So I need to make sure the Hero is still visible.
// I will export the Hero part as a separate component `HeroSection` and update App.tsx to use it, 
// OR I will include the Hero markup in this file but structure it so it works with the fixed nav.

export function HeroSection() {
  const mousePosition = useMousePosition()

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center relative px-4 pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neutral-800/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="text-center max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex justify-center">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Open to Opportunities
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-200 to-yellow-500 block pb-2">
              Prajyoth Gandam
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-foreground/90 mb-8 max-w-3xl mx-auto">
            AI & Machine Learning Engineer
            <span className="block text-primary/80 mt-2 text-xl md:text-2xl font-normal">Building Intelligence For The Future</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          specializing in production-oriented machine learning systems where model behavior, robustness, and deployment constraints matter.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="rounded-full text-lg px-8 h-12 shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
            <Link to="/projects/akgc">
              View Flagship Project
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-12 border-primary/20 hover:bg-primary/5 hover:border-primary/50" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

