export function Hero() {
  return (
    <section className="hero-section section-shell" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Creative tech for students</p>
        <h1>Khơi mở tư duy công nghệ cho trẻ bằng những dự án thật.</h1>
        <p className="section-lead">
          STEAM Lab giúp học sinh làm quen với Scratch, lập trình web và phát
          triển game qua lộ trình trực quan, vui nhộn và có sản phẩm mang về
          sau mỗi khóa học.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#register">
            Đăng ký học thử
          </a>
          <a className="secondary-link" href="#courses">
            Xem lộ trình học
          </a>
        </div>

        <div className="hero-stats" aria-label="STEAM Lab highlights">
          <article>
            <strong>12+</strong>
            <span>Dự án mỗi khóa</span>
          </article>
          <article>
            <strong>90%</strong>
            <span>Buổi học thực hành</span>
          </article>
          <article>
            <strong>1:8</strong>
            <span>Tỉ lệ giáo viên</span>
          </article>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit-card">
          <span>Scratch</span>
          <span>Web</span>
          <span>Game</span>
        </div>
      </div>
    </section>
  )
}
