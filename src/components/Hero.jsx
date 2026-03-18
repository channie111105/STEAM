export function Hero() {
  return (
    <section className="hero-section section-shell" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Creative tech for students</p>
        <h1>STEAM landing page is ready for the feature branches.</h1>
        <p className="section-lead">
          We are setting up the shared layout first, then each branch will
          enrich this page with dedicated content and polish.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#register">
            Register now
          </a>
          <a className="secondary-link" href="#courses">
            Explore courses
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit-card">
          <span>Robotics</span>
          <span>Code</span>
          <span>Design</span>
        </div>
      </div>
    </section>
  )
}
