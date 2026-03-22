
import "./Academics.css"

function Academics(){
  
  return(

  <div className="academics-page">

  {/* HERO */}
  <section className="acad-hero">
 
    <div className="hero-text">
      <h1>Academic Excellence</h1>
      <p>Empowering students with knowledge, skills & values</p>
    </div>
  </section>

  {/* PHILOSOPHY */}
  <section className="acad-section">
    <h2>Our Academic Approach</h2>
    <p>
    We aim to provide long-term solutions to academic challenges by helping 
    students develop knowledge, skills, and values for sustainable development, 
    global citizenship, and cultural understanding.
    </p>
  </section>

  {/* LIFE SKILLS */}
  <section className="acad-cards" >

    <div className="acad-card">
      <h3>Life Skills Teaching</h3>
      <p>
      We integrate real-world problems into learning using digital tools, 
      ensuring students develop practical understanding and adaptability.
      </p>
    </div>

    <div className="acad-card">
      <h3>Modern Teaching Methods</h3>
      <p>
      Our teaching focuses on communication, creativity, collaboration 
      and problem-solving for real-world success.
      </p>
    </div>

  </section>

  {/* SKILLS */}
  <section className="skills">

    <h2>21st Century Skills</h2>

    <div className="skill-grid">

      <div className="skill" >
        <h4>Communication & Collaboration</h4>
        <p>Students express ideas confidently and work effectively in teams.</p>
      </div>

      <div className="skill" >
        <h4>Creativity & Innovation</h4>
        <p>Encouraging new ideas and out-of-the-box thinking.</p>
      </div>

      <div className="skill" >
        <h4>Critical Thinking</h4>
        <p>Students learn to analyze, evaluate and solve problems.</p>
      </div>

    </div>

  </section>

  {/* PROCESS */}
  <section className="process">

    <h2>Learning Process</h2>

    <div className="process-grid">

      <div>Research</div>
      <div>Knowledge</div>
      <div>Comprehension</div>
      <div>Application</div>
      <div>Analysis</div>
      <div>Collaboration</div>
      <div>Evaluation</div>

    </div>

  </section>

  {/* QUALITY */}
  <section className="quality">
    <div className="quality-box">

    <h2>Ensuring Quality Education</h2>

    <p>
    We develop confident students with strong moral values, leadership skills, 
    and global awareness through academics, sports, and personality development.
    </p>
    </div>

  </section>

  {/* TEACHERS */}
  <section className="teachers">

    <h2>Our Teaching Staff</h2>

    <p>
    Our highly qualified teachers are selected through a rigorous process and 
    trained regularly to stay updated with modern teaching methodologies.
    </p>

  </section>

  </div>

  )
}

export default Academics