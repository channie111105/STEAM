export function Header() {
  return (
    <header className="site-header section-shell">
      <a className="brand-mark" href="#hero" aria-label="STEAM home">
        <span className="brand-badge">S</span>
        <span className="brand-copy">
          <strong>STEAM Lab</strong>
          <small>Placeholder menu</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#courses">Course</a>
        <a href="#testimonials">Review</a>
        <a href="#register">Register</a>
      </nav>
    </header>
  )
}
