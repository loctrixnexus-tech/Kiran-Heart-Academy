import "./Gallery.css"
import { useState } from "react"

function Gallery(){

  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
     "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
     "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/img18.jpg",
     "/gallery/img19.jpg",
    "/gallery/img20.jpg",
    "/gallery/img21.jpg",
     "/gallery/img22.jpg",
     "/gallery/img23.jpg",
    "/gallery/img24.jpg",
  
  ]

 
  const [selectedImg, setSelectedImg] = useState(null)

  return(
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Moments, Memories & Campus Life</p>
      </section>

      {/* GRID */}
      <section className="gallery-grid">

        {images.map((img, index)=>(
          <div 
            className="gallery-item" 
            key={index}
            onClick={()=>setSelectedImg(img)}
          >
            <img src={img} alt="gallery"/>
          </div>
        ))}

      </section>

      {/* POPUP VIEW */}
      {selectedImg && (
        <div className="popup" onClick={()=>setSelectedImg(null)}>
          <img src={selectedImg} alt="big"/>
        </div>
      )}

    </div>
  )
}

export default Gallery