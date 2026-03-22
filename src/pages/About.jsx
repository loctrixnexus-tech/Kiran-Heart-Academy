

import "./About.css"
import schoolImg from "../assets/1.png"
import directorImg from "../assets/director.jpg"
import principalImg from "../assets/principal.jpg"

function About(){

  return(
    <div className="about-page">

    {/* HERO */}
    <section className="about-hero">
      <img src={schoolImg} className="hero-img" />
      <div className="overlay"></div>

      <div className="hero-text">
        <h1>Kiran Heart Academy</h1>
        <p>Shaping Future Through Quality Education</p>
      </div>
    </section>

    {/* ABOUT */}
    <section className="about-section">
      <h2>About Our School</h2>

      <p>
      Established in 2012-13 by Mandvi Educational Trust, 
      Kiran Heart Academy is committed to providing quality education 
      in rural areas at an affordable cost.
      </p>

      <p>
      Located near Jamui Station, the campus provides a peaceful environment 
      with modern infrastructure and well-equipped labs.
      </p>
    </section>

    {/* LEADERSHIP */}
    <section className="leadership">

      <h2>Leadership Messages</h2>

      <div className="leader-grid">

        {/* DIRECTOR */}
        <div className="leader-card">
          <img src={directorImg} alt="Director"/>
          <h3>K.K. Singh</h3>
          <span>Director</span>

          <p>
          Our mission is to provide quality education and maintain high standards. 
          Education is the light that removes darkness and builds a better society.
          </p>
        </div>

        {/* PRINCIPAL */}
        <div className="leader-card">
          <img src={principalImg} alt="Principal"/>
          <h3>Rakesh Kumar</h3>
          <span>Principal</span>

          <p>
          We thank parents for their support. With discipline, smart classes 
          and modern teaching, we ensure overall development of every student.
          </p>
        </div>

      </div>

    </section>

    {/* FEATURES */}
    <section className="features">

      <h2>What Makes Us Different</h2>

      <div className="feature-grid">

        <div className="feature">
          <h3>Modern Labs</h3>
          <p>Fully equipped science and computer laboratories.</p>
        </div>

        <div className="feature">
          <h3>Digital Learning</h3>
          <p>Smart classes and technology-based education.</p>
        </div>

        <div className="feature">
          <h3>Beautiful Campus</h3>
          <p>Clean and student-friendly environment.</p>
        </div>

      </div>

    </section>

    {/* MOTTO */}
    <section className="motto">
      <h2>Our Motto</h2>
      <p>"The way to win the world by knowledge"</p>
      <p>"You learn, you apply and you conquer"</p>
    </section>

    </div>
  )
}

export default About