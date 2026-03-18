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
          count={360}
          magnetRadius={9}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1.5}
          particleSize={1.9}
          lerpSpeed={0.07}
          color="#ffb347"
          autoAnimate
          particleVariance={1.35}
          rotationSpeed={0.08}
          depthFactor={1.35}
          pulseSpeed={3.1}
          particleShape="capsule"
          fieldStrength={14}
          trackCursorGlobally
        />
      </div>

      <div className="page-edge page-edge-right" aria-hidden="true">
        <Antigravity
          count={360}
          magnetRadius={9}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1.5}
          particleSize={1.9}
          lerpSpeed={0.07}
          color="#8eb8ff"
          autoAnimate
          particleVariance={1.35}
          rotationSpeed={-0.08}
          depthFactor={1.35}
          pulseSpeed={3.1}
          particleShape="capsule"
          fieldStrength={14}
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
