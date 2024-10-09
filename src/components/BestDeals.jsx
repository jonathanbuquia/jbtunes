import Card from "./reusables/Card"
import "./BestDeals.css"
import BestDealsCard from "./reusables/BestDealsCard"

import BestDeals1 from "../assets/best_deals_images/bestdeals-1.png"
import BestDeals2 from "../assets/best_deals_images/bestdeals-2.png"
import BestDeals3 from "../assets/best_deals_images/bestdeals-3.png"




const BestDeals = () => {
  return (
    <div className="best-deals-section">
      <Card title="Best Deals" description="Always get adieus nature day course for common. My little garret repair to desire he esteem."/>
      <BestDealsCard 
        title="VIFA SPEAKER" 
        description="The unpleasant yet melancholy  but end by the appearance. And excellence partiality estimating terminated dat everything." 
        price="$350.99" 
        image={BestDeals1}
      />
      <BestDealsCard 
        title="VIFA SPEAKER" 
        description="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection" 
        price="$350.99" 
        image={BestDeals2}
      />
      <BestDealsCard 
        title="VIFA SPEAKER" 
        description="From home to the outdoors, this wireless speaker keeps the music going with effortless portability and stunning sound quality." 
        price="$350.99" 
        image={BestDeals3}
      />
    
    
    </div>
  )
}

export default BestDeals
