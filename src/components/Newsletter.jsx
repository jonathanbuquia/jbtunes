import "./Newletter.css"


const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-objects">
        <h3>Subscribe for the daily Updates</h3>
        <p>Enter your email below for daily updates</p>
        <div className="form">
          <input type="text" placeholder="Enter your email" className="input-form"/>
          <button className="btn">SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
