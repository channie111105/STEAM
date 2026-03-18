export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand-mark" href="#hero" aria-label="STEAM home">
            <span className="brand-badge">S</span>
            <span className="brand-copy">
              <strong>STEAM Lab</strong>
              <small>Build. Play. Grow.</small>
            </span>
          </a>
          <p>
            Trung tâm học công nghệ sáng tạo cho học sinh, kết hợp tư duy lập
            trình, thiết kế và làm dự án nhóm.
          </p>
        </div>

        <div className="footer-links">
          <h3>Khám phá</h3>
          <a href="#courses">Khóa học</a>
          <a href="#testimonials">Cảm nhận</a>
          <a href="#register">Đăng ký</a>
        </div>

        <div className="footer-links">
          <h3>Liên hệ</h3>
          <a href="mailto:hello@steamlab.vn">hello@steamlab.vn</a>
          <a href="tel:0901234567">0901 234 567</a>
          <span>TP. Ho Chi Minh</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 STEAM Lab. All rights reserved.</p>
        <p>Designed for a clean Git workflow submission.</p>
      </div>
    </footer>
  )
}
