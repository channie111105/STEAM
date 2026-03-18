import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
}

export function EnrollmentForm() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(`Cam on ${form.name || 'ban'} da dang ky tu van cung STEAM Lab.`)
    setForm(initialForm)
  }

  return (
    <section className="content-section section-shell form-section" id="register">
      <div className="section-heading form-copy">
        <p className="eyebrow">Registration</p>
        <h2>Để lại thông tin để nhận lộ trình học và lịch học thử miễn phí.</h2>
        <p className="section-lead">
          Đội ngũ STEAM Lab sẽ liên hệ trong vòng 24 giờ để tư vấn lớp phù hợp
          theo độ tuổi và mục tiêu học tập của bé.
        </p>
      </div>

      <form className="enrollment-form" onSubmit={handleSubmit}>
        <label>
          Họ và tên
          <input
            name="name"
            type="text"
            placeholder="Nguyen Van A"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="phuhuynh@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Số điện thoại
          <input
            name="phone"
            type="tel"
            placeholder="0901234567"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <button className="primary-button form-button" type="submit">
          Nhận tư vấn ngay
        </button>

        {message ? <p className="form-message">{message}</p> : null}
      </form>
    </section>
  )
}
