import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Benefits from '../components/Benefits/Benefits'
import About from '../components/About/About'
import Objectives from '../components/Objectives/Objectives'
import Testimonials from '../components/Testimonials/Testimonials'
import Plans from '../components/Plans/Plans'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Objectives />
        <Testimonials />
        <Plans />
      </main>
      <Footer />
    </>
  )
}
