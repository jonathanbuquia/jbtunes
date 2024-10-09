import "./Testimonials.css"
import Card from "./reusables/Card"
import infoTestimonials from "../components/reusables/infoTestimonials.js"


const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Card title="Testimonials"  description="Our Clients send us bunch of smiles with out services and we love them"/>
      <div className="testimonials-card">
        {infoTestimonials.map((obj) => (
          <div key={obj.id} className="card-specifics">
              <img src={obj.image} alt="picture"/>
              <p className="card-message">{obj.message}</p>
              <span>⭐⭐⭐⭐⭐</span>
              <p className="card-name">{obj.name}</p>
              <p className="card-position">{obj.position}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonials
