import './App.css'
import { Courses } from './components/Courses'
import { EnrollmentForm } from './components/EnrollmentForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className="page-shell">
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
