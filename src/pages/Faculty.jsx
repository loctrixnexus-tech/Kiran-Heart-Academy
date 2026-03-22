import "./Faculty.css"

function Faculty(){

  const leaders = [
    {
      name: "K.K. Singh",
      role: "Director",
      img: "/faculty/kk.jpg"
    },
    {
      name: "Rakesh Kumar",
      role: "Principal",
      img: "/faculty/rakesh.jpg"
    }
  ]

  const teachers = [
    {name:"Bidyabati Acarya", role:"Faculty", qual:"Graduate, B.Ed", img:"/faculty/bidyabati.jpg"},
    {name:"Kumar Shanu", role:"Faculty", qual:"M.Com, B.Ed", img:"/faculty/shanu.jpg"},
    {name:"Shivendu Kumar Singh", role:"Faculty", qual:"Graduate, B.Ed", img:"/faculty/shivendu.jpg"},
    {name:"Nipu", role:"Faculty", qual:"Graduate, D.El.ED", img:"/faculty/nipu.jpg"},
    {name:"Nawnil Kumar", role:"Faculty", qual:"Graduate, D.El.Ed", img:"/faculty/nawnil.jpg"},
    {name:"Khushboo Kumari", role:"Faculty", qual:"Graduate, D.El.Ed", img:"/faculty/khushboo.jpg"},
    {name:"Dipali ", role:"Faculty", qual:"Graduate, B.Ed", img:"/faculty/dipali.jpg"},
    {name:"Jayshankar Singh", role:"Librarian", qual:"M.Lib", img:"/faculty/jay.jpg"},
    {name:"Dharmesh Sir", role:"Counsellor", qual:"Graduate", img:"/faculty/dharmesh.jpg"},
     {name:"Durgesh Kumar Pandey", role:"Faculty", qual:"B.Tech(I.T.) and MBA", img:"/faculty/durgesh.jpg"},
      {name:"Sandeep Anand", role:"Faculty", qual:"MA, D.EL.ED", img:"/faculty/sandeep.jpg"}
  ]

  return(
    <div className="faculty-page">

      {/* HERO */}
      <section className="faculty-hero">
        <h1>Our Faculty</h1>
        <p>Meet the mentors shaping future leaders</p>
      </section>

      {/* LEADERS */}
      <section className="leaders">

        {leaders.map((item, index)=>(
          <div className="leader-card" key={index}>
            <img src={item.img} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.role}</p>
          </div>
        ))}

      </section>

      {/* TEACHERS */}
      <section className="teacher-grid">

        {teachers.map((item, index)=>(
          <div className="teacher-card" key={index}>

            <img src={item.img} alt={item.name}/>

            <div className="teacher-info">
              <h3>{item.name}</h3>
              <p className="role">{item.role}</p>
              <p className="qual">{item.qual}</p>
            </div>

          </div>
        ))}

      </section>

    </div>
  )
}

export default Faculty