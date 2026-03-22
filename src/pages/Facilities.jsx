import "./Facilities.css"

function Facilities(){

  const facilities = [
    {
      title: "Computer Lab",
      desc: "Fully equipped computer lab with modern systems, Wi-Fi connectivity, projectors and backup power ensuring uninterrupted digital learning.",
      img: "/facilities/lab.jpg"
    },
    {
      title: "Security & CCTV",
      desc: "24/7 campus security with CCTV surveillance ensuring complete safety and monitoring of students.",
      img: "/facilities/cctv.jpg"
    },
    {
      title: "Playground",
      desc: "Large playground for sports, physical activities and events supporting overall student development.",
      img: "/facilities/playground.jpg"
    },
    {
      title: "Infrastructure",
      desc: "Well-planned campus with classrooms, labs, seminar halls and administrative facilities.",
      img: "/facilities/building.jpg"
    },
    {
      title: "Discipline & Punctuality",
      desc: "Strong focus on discipline, responsibility and time management.",
      img: "/facilities/discipline.jpg"
    }
  ]

  return(
    <div className="facilities-page">

      {/* HERO */}
      <section className="fac-hero">
        <h1>Campus Facilities</h1>
        <p>Modern infrastructure with safe and inspiring environment</p>
      </section>

      {/* STRIP DESIGN */}
      {facilities.map((item, index)=>(
        <section 
          className={`fac-strip ${index % 2 !== 0 ? "reverse" : ""}`} 
          key={index}
        >

          <div className="fac-img">
            <img src={item.img} alt={item.title}/>
          </div>

          <div className="fac-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>

        </section>
      ))}

      {/* CTA */}
      <section className="fac-cta">
        <h2>Explore Our Campus</h2>
        <p>Visit us to experience world-class facilities</p>
      </section>

    </div>
  )
}

export default Facilities