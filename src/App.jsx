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
      <div className="page-edge page-edge-left" aria-hidden="true">
        <Antigravity
          count={260}
          magnetRadius={7}
          ringRadius={9}
          waveSpeed={0.35}
          waveAmplitude={1.3}
          particleSize={1.5}
          lerpSpeed={0.045}
          color="#ffb347"
          autoAnimate
          particleVariance={1.2}
          rotationSpeed={0.06}
          depthFactor={1.2}
          pulseSpeed={2.8}
          particleShape="capsule"
          fieldStrength={9}
          trackCursorGlobally
        />
      </div>

      <div className="page-edge page-edge-right" aria-hidden="true">
        <Antigravity
          count={260}
          magnetRadius={7}
          ringRadius={9}
          waveSpeed={0.35}
          waveAmplitude={1.3}
          particleSize={1.5}
          lerpSpeed={0.045}
          color="#8eb8ff"
          autoAnimate
          particleVariance={1.2}
          rotationSpeed={-0.06}
          depthFactor={1.2}
          pulseSpeed={2.8}
          particleShape="capsule"
          fieldStrength={9}
          trackCursorGlobally
        />
      </div>

      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <div className="page-content">
        <Header />

        <main>
          <Hero />
          <Courses />
          <Testimonials />
          <EnrollmentForm />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
