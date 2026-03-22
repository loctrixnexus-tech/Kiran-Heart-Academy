import "./Contact.css"

function Contact(){
  return(
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you — Reach out anytime</p>
      </section>

      {/* MAIN */}
      <section className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h2>Kiran Heart Academy</h2>

          <p>📍 Malaypur, Barhat Road, Jamui, Bihar</p>
          <p>📌 Postcode - 811313</p>
          <p>📞 +91-9162869381</p>
          <p>✉️ contact@kiranheartacademy.co.in</p>

        </div>

        {/* FORM */}
        <div className="contact-form">

          <h2>Get In Touch</h2>

          <form>

            <div className="input-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <input type="text" placeholder="Mobile Number" />

            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="map-section">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps?q=Jamui%20Bihar&output=embed"
          loading="lazy"
        ></iframe>

      </section>

      {/* WHATSAPP */}
      <a 
        href="https://wa.me/919162869381"
        className="whatsapp-btn"
        target="_blank"
      >
        💬
      </a>

    </div>
  )
}

export default Contact