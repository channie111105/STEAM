import './App.css'
import { Courses } from './components/Courses'
import Antigravity from './components/Antigravity'
import { EnrollmentForm } from './components/EnrollmentForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className="page-shell">
      <div className="page-antigravity" aria-hidden="true">
        <Antigravity
          count={420}
          magnetRadius={7}
          ringRadius={10}
          waveSpeed={0.28}
          waveAmplitude={1.2}
          particleSize={1.3}
          lerpSpeed={0.035}
          color="#ffb347"
          autoAnimate
          particleVariance={1.1}
          rotationSpeed={0.12}
          depthFactor={1.2}
          pulseSpeed={2.2}
          particleShape="capsule"
          fieldStrength={8}
        />
      </div>

      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <Header />

      <main>
        <Hero />
        <Courses />
        <Testimonials />
        <EnrollmentForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
