import BorderGlow from './BorderGlow'

const courseItems = [
  {
    title: 'Scratch Explorer',
    level: 'Beginner',
    summary: 'Làm quen tư duy lập trình qua kéo thả, kể chuyện số và mini game.',
    bullets: ['Tư duy logic', 'Animation', 'Dự án nhóm'],
  },
  {
    title: 'Web Creator',
    level: 'Intermediate',
    summary: 'Thiết kế website cá nhân bằng HTML, CSS và JavaScript thực tế.',
    bullets: ['UI cơ bản', 'Responsive', 'Deploy project'],
  },
  {
    title: 'Game Builder',
    level: 'Advanced',
    summary: 'Xây gameplay, nhân vật và hệ thống điểm cho game 2D sáng tạo.',
    bullets: ['Game loop', 'Level design', 'Pitch sản phẩm'],
  },
]

export function Courses() {
  return (
    <section className="content-section section-shell" id="courses">
      <div className="section-heading">
        <p className="eyebrow">Courses</p>
        <h2>Ba lộ trình học giúp trẻ đi từ khám phá đến tạo sản phẩm riêng.</h2>
      </div>

      <div className="course-grid">
        {courseItems.map((course) => (
          <BorderGlow
            key={course.title}
            edgeSensitivity={30}
            glowColor="255 179 71"
            backgroundColor="#fffdf7"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#ffb347', '#ef6c33', '#8eb8ff']}
          >
            <article className="course-card">
              <p className="course-level">{course.level}</p>
              <h3>{course.title}</h3>
              <p>{course.summary}</p>

              <ul className="course-points">
                {course.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </BorderGlow>
        ))}
      </div>
    </section>
  )
}
