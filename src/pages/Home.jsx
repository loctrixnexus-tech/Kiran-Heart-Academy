import "./Home.css"
import { useEffect, useState } from "react"
import studentimage from "../assets/school.jpg"
import lib from "../assets/lib.jpg"
import lib2 from "../assets/pic.jpg"
import { FaInfoCircle } from "react-icons/fa"


function Home(){

const images = [
lib,
lib2,
"https://images.unsplash.com/photo-1577896851231-70ef18881754"
]

const [current,setCurrent] = useState(0)

useEffect(()=>{
const interval = setInterval(()=>{
setCurrent((prev)=>(prev+1)%images.length)
},4000)

return ()=>clearInterval(interval)
},[])

return(

<div>

{/* NAVBAR */}



{/* HERO */}
<section className="hero">

<img src={images[current]} alt="hero" className="hero-img"/>

<div className="hero-overlay"></div>

<div className="hero-content">
<h1>Future Focused Education</h1>
<p>Inspiring curiosity, creativity and leadership in every student.</p>
<button className="hero-btn">Apply For Admission</button>
</div>

</section>


{/* STATS */}
<section className="values">

<h2 className="section-title">Our Core Values</h2>

<div className="value-grid">

<div className="value-card">
<h3>🎯 Excellence</h3>
<p>We strive for academic and personal excellence in every student.</p>
</div>

<div className="value-card">
<h3>💡 Innovation</h3>
<p>Modern teaching methods and smart classrooms.</p>
</div>

<div className="value-card">
<h3>🤝 Integrity</h3>
<p>Building honesty, discipline and strong character.</p>
</div>

<div className="value-card">
<h3>🌱 Growth</h3>
<p>Focus on overall development of every child.</p>
</div>

</div>

</section>


{/* WHY */}
<section className="why-advanced">

<div className="why-container">

{/* LEFT IMAGE */}
<div className="why-image">
<img src="https://images.unsplash.com/photo-1588072432836-e10032774350" />
</div>

{/* RIGHT CONTENT */}
<div className="why-content">

<h2>Why Choose Our School</h2>

<div className="why-list">

<div className="why-item">
<span>🎓</span>
<div>
<h3>Expert Faculty</h3>
<p>Highly qualified teachers guiding every student.</p>
</div>
</div>

<div className="why-item">
<span>🧪</span>
<div>
<h3>Modern Infrastructure</h3>
<p>Smart classrooms & advanced laboratories.</p>
</div>
</div>

<div className="why-item">
<span>🛡</span>
<div>
<h3>Safe Environment</h3>
<p>Secure campus with disciplined atmosphere.</p>
</div>
</div>

<div className="why-item">
<span>🏆</span>
<div>
<h3>All Round Development</h3>
<p>Focus on academics, sports & creativity.</p>
</div>
</div>

</div>

</div>

</div>

</section>

<section className="programs">

<h2 className="section-title">Academic Programs</h2>

<div className="program-grid">

<div className="program-card">
<img src="https://images.unsplash.com/photo-1588072432836-e10032774350"/>
<div className="program-content">
<h3>Primary School</h3>
<p>Strong learning foundation with creativity.</p>
</div>
</div>

<div className="program-card">
<img src="https://images.unsplash.com/photo-1577896851231-70ef18881754"/>
<div className="program-content">
<h3>Middle School</h3>
<p>Develop analytical and logical thinking.</p>
</div>
</div>

<div className="program-card">
<img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"/>
<div className="program-content">
<h3>Senior Secondary</h3>
<p>Prepare for future careers and success.</p>
</div>
</div>

</div>

</section>


{/* GALLERY */}
<section className="achievements">

<h2 className="section-title">Our Achievements</h2>

<div className="achieve-grid">

<div className="achieve-card">
<h3>95%</h3>
<p>Board Exam Result</p>
</div>

<div className="achieve-card">
<h3>50+</h3>
<p>Qualified Teachers</p>
</div>

<div className="achieve-card">
<h3>1000+</h3>
<p>Happy Students</p>
</div>

<div className="achieve-card">
<h3>15+</h3>
<p>Years of Excellence</p>
</div>

</div>

</section>


{/* ADMISSION */}
<section className="admission">

<div className="admission-box">

<h2>Admissions Open 2026</h2>

<p>Secure your child’s future with world-class education</p>

<button className="hero-btn">Apply Online</button>

</div>

</section>


{/* CONTACT */}
<section className="contact-premium">

<h2 className="section-title">Get In Touch</h2>

<div className="contact-wrapper">

<div className="contact-container">

{/* MAP */}
<div className="contact-map">
<iframe
src="https://maps.google.com/maps?q=jamui%20bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
></iframe>
</div>

{/* CARD */}
<div className="contact-box">

<h3>Kiran Heart Academy</h3>

<p>📍 Malaypur, Jamui Bihar</p>
<p>📞 +91 9162869381</p>
<p>✉️ info@kiranacademy.com</p>

<div className="contact-buttons">
<button className="call-btn">Call Now</button>
<button className="contact-btn">View Full Contact →</button>
</div>

</div>

</div>

</div>

</section>


{/* WHATSAPP */}
<a href="https://wa.me/919162869381" className="whatsapp">
WhatsApp
</a>


{/* FOOTER */}


</div>

)

}

export default Home