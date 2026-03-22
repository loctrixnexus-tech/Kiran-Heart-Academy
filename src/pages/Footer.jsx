import "./Footer.css"

function Footer({ setPage }){

  const goPage = (page)=>{
    setPage(page)
    window.scrollTo(0,0)
  }

  return(
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-box">
          <h2>Kiran Heart Academy</h2>
          <p>
            Providing quality education with discipline, values and modern learning 
            for a better future.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={()=>goPage("home")}>Home</li>
            <li onClick={()=>goPage("about")}>About</li>
            <li onClick={()=>goPage("academics")}>Academics</li>
            <li onClick={()=>goPage("admissions")}>Admissions</li>
            <li onClick={()=>goPage("gallery")}>Gallery</li>
            <li onClick={()=>goPage("facilities")}>Facilities</li>
            <li onClick={()=>goPage("faculty")}>Faculty</li>
            <li onClick={()=>goPage("contact")}>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Info</h3>
          <p>📍 Jamui, Bihar</p>
          <p>📞 +91-9162869381</p>
          <p>✉️ contact@kiranheartacademy.co.in</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Kiran Heart Academy | All Rights Reserved</p>
        <p className="developer">Website developed by <span>Loctrix Nexus</span></p>
      </div>

    </footer>
  )
}

export default Footer