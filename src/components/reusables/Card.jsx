import "./Card.css";


const Card = ({ title, description }) => {
  return (
    <div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
