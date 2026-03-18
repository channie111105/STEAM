import Antigravity from './Antigravity'

export function Hero() {
  return (
    <section className="hero-section section-shell" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Công nghệ sáng tạo cho học sinh</p>
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

        <div className="hero-stats" aria-label="Điểm nhấn của STEAM Lab">
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

      <div className="hero-visual">
        <div className="hero-lab-card">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#ef6c33"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />

          <div className="hero-lab-overlay">
            <p className="hero-lab-kicker">Mô phỏng antigravity</p>
            <h3>Không gian sáng tạo STEAM</h3>
            <p>Chạm hoặc rê chuột để thấy các hạt chuyển động theo trường hút.</p>
            <div className="hero-lab-tags" aria-label="Lĩnh vực nổi bật">
              <span>Scratch</span>
              <span>Web</span>
              <span>Game</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
