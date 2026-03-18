import Antigravity from './Antigravity'
import AnimatedContent from './AnimatedContent'

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
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <div className="hero-lab-overlay-inner">
                <p className="hero-lab-kicker">Học qua dự án STEAM</p>
                <h3>Tư duy liên môn cho học sinh</h3>
                <p>
                  Kết hợp khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học
                  trong mỗi hoạt động khám phá.
                </p>
                <div className="hero-lab-tags" aria-label="Trụ cột STEAM">
                  <span>Khoa học</span>
                  <span>Kỹ thuật</span>
                  <span>Sáng tạo</span>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  )
}
