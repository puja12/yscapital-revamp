import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Portfolio from "./components/Portfolio"
import DigitalAccess from "./components/DigitalAccess"
import Audience from "./components/Audience"
import Services from "./components/Services"
import Process from "./components/Process"
import WhyChoose from "./components/WhyChoose"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />

      <Portfolio />
      <DigitalAccess />
      <Audience />
      <Services />
      <Process />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  )
}