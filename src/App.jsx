import { useState } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Admissions from "./pages/Admissions"
import Gallery from "./pages/Gallery"
import Facilities from "./pages/Facilities"
import Faculty from "./pages/Faculty"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"


function App() {

  const [page, setPage] = useState("home")
  return (<>
    <header className="navbar">

  <div className="logo">Kiran Heart Academy</div>

  <nav className="nav-links">

    <button 
      className={page==="home" ? "active" : ""} 
      onClick={()=>setPage("home")}
    >Home</button>

    <button 
      className={page==="about" ? "active" : ""} 
      onClick={()=>setPage("about")}
    >About</button>

    <button 
      className={page==="academics" ? "active" : ""} 
      onClick={()=>setPage("academics")}
    >Academics</button>

    <button 
      className={page==="admissions" ? "active" : ""} 
      onClick={()=>setPage("admissions")}
    >Admissions</button>

    <button 
      className={page==="gallery" ? "active" : ""} 
      onClick={()=>setPage("gallery")}
    >Gallery</button>

    <button 
      className={page==="facilities" ? "active" : ""} 
      onClick={()=>setPage("facilities")}
    >Facilities</button>

    <button 
      className={page==="faculty" ? "active" : ""} 
      onClick={()=>setPage("faculty")}
    >Faculty</button>

    <button 
      className={page==="contact" ? "active" : ""} 
      onClick={()=>setPage("contact")}
    >Contact</button>

  </nav>

  <button className="nav-btn">Apply Now</button>

</header>

    {page === "home" && <Home setPage={setPage} />}
    {page === "about" && <About setPage={setPage} />}
    {page === "academics" && <Academics />}
    {page === "admissions" && <Admissions />}
    {page === "gallery" && <Gallery />}
    {page === "facilities" && <Facilities />}
    {page === "faculty" && <Faculty />}
    {page === "contact" && <Contact />}
    <Footer setPage={setPage}/>
  </>
  )
}

export default App