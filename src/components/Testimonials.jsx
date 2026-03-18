const testimonials = [
  {
    quote:
      'Con mình từ chỗ chỉ thích chơi game đã bắt đầu tự thiết kế nhân vật và kể lại logic làm game cho cả nhà nghe.',
    name: 'Chị Minh Anh',
    role: 'Phụ huynh học viên 10 tuổi',
  },
  {
    quote:
      'Điểm mình thích nhất là mỗi buổi đều có sản phẩm nhỏ để khoe. Em thấy học code không hề khô khan như trước.',
    name: 'Gia Hân',
    role: 'Học viên lớp Web Creator',
  },
  {
    quote:
      'Lộ trình rõ, giáo viên phản hồi kỹ và đặc biệt rất biết cách kéo học sinh vào hoạt động nhóm.',
    name: 'Anh Khôi',
    role: 'Phụ huynh học viên 12 tuổi',
  },
]

export function Testimonials() {
  return (
    <section className="content-section section-shell" id="testimonials">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Phụ huynh và học sinh đánh giá cao cách học qua làm thật.</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-meta">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
