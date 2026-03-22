import "./Admissions.css"
import feeImg from "../assets/feeStructure.jpeg"

function Admissions(){
  return(
    <div className="admissions-page">
       

    {/* HERO SPLIT */}
    <section className="hero-split">

      <div className="hero-left">
        <h1>Admissions 2026</h1>
        <p>
        Begin your child’s journey with excellence, discipline and future-ready education.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Apply Now</button>
          <button className="btn outline">Prospectus</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="floating-card">🎓 Quality Education</div>
        <div className="floating-card">🏫 Smart Classes</div>
        <div className="floating-card">🌍 Global Skills</div>
      </div>

    </section>
    

    {/* TIMELINE PROCESS */}
    <div class="section-box">
    <section className="timeline">

      <h2>Admission Journey</h2>

      <div className="timeline-line">

        <div className="timeline-item">
          <span>1</span>
          <h3>Apply</h3>
          <p>Fill the admission form with details</p>
        </div>

        <div className="timeline-item">
          <span>2</span>
          <h3>Verification</h3>
          <p>Submit documents for approval</p>
        </div>

        <div className="timeline-item">
          <span>3</span>
          <h3>Admission Confirmed</h3>
          <p>Start your academic journey</p>
        </div>

      </div>

    </section>
    </div>

    {/* ACTION CARDS (UNIQUE) */}
    <section className="action-cards">

      <div className="action-box">
        <h3>Apply Online</h3>
        <p>Quick & easy admission process</p>
        <button>Start Now</button>
      </div>

      <div className="action-box">
        <h3>Download Prospectus</h3>
        <p>Get complete school details</p>
        <button>Download</button>
      </div>

      <div className="action-box highlight">
        <h3>Pay Fee</h3>
        <p>Secure & fast payment system</p>
        <button>Pay Now</button>
      </div>

    </section>

    {/* FEE SPOTLIGHT */}
    <div className="section-box">
    <section className="fee-spotlight">

      <div className="fee-text">
        <h2>Transparent Fee Structure</h2>
        <p>
        We maintain a clear and affordable fee structure ensuring accessibility 
        for every student.
        </p>
      </div>

      <div className="fee-image">
        <img src={feeImg} alt="fee"/>
      </div>

    </section></div>

    {/* PREMIUM CTA */}
    <section className="cta-premium">

      <h2>Secure Your Child’s Future Today</h2>
      <p>Limited seats available. Apply now.</p>

      <button className="cta-btn">Apply Today</button>

    </section>

    
    </div>
  )
}

export default Admissions