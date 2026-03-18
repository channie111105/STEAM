import { useEffect, useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isMenuOpen ? 'site-header-open' : ''} ${
        isScrolled ? 'site-header-scrolled' : ''
      }`}
    >
      <a className="brand-mark" href="#hero" aria-label="STEAM home">
        <span className="brand-badge">S</span>
        <span className="brand-copy">
          <strong>STEAM Lab</strong>
          <small>Học sáng tạo cho học sinh 8-15 tuổi</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-label="Mở menu điều hướng"
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        Menu
      </button>

      <nav
        className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
        aria-label="Điều hướng chính"
      >
        <a href="#hero" onClick={handleCloseMenu}>
          Trang chủ
        </a>
        <a href="#courses" onClick={handleCloseMenu}>
          Khóa học
        </a>
        <a href="#testimonials" onClick={handleCloseMenu}>
          Cảm nhận
        </a>
        <a href="#register" onClick={handleCloseMenu}>
          Đăng ký
        </a>
      </nav>

      <a className="header-cta" href="#register" onClick={handleCloseMenu}>
        Đăng ký tư vấn
      </a>
    </header>
  )
}
