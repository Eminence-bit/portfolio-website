import Header from "./components/header"
import AboutSection from "./components/about-section"
import ProjectsSection from "./components/projects-section"
import PositionsSection from "./components/positions-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import AnimatedBackground from "./components/animated-background"

function App() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen bg-background/80 backdrop-blur-sm">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <AboutSection />
          <ProjectsSection />
          <PositionsSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App

