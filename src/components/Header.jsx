export function Header() {
  return (
    <header className="site-header section-shell">
      <a className="brand-mark" href="#hero" aria-label="STEAM home">
        <span className="brand-badge">S</span>
        <span className="brand-copy">
          <strong>STEAM Lab</strong>
          <small>Học sáng tạo cho học sinh 8-15 tuổi</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#hero">Trang chủ</a>
        <a href="#courses">Khóa học</a>
        <a href="#testimonials">Cảm nhận</a>
        <a href="#register">Đăng ký</a>
      </nav>

      <a className="header-cta" href="#register">
        Đăng ký tư vấn
      </a>
    </header>
  )
}
