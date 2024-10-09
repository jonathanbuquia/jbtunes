import "./BestDealsCard.css"
import BestDeals from "../../assets/best_deals_images/bestdeals-1.png"

const BestDealsCard = ({title, description, price, image}) => {
  return (
    <div className="best-deals-card-section">
      <div className="card-left-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="lower-section">
          <span>{price}</span>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="card-right-container">
        <img src={image} alt="bestdeals" className="best-deals-image"/>
      </div>
    </div>
  )
}

export default BestDealsCard
