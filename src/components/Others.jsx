import "./Others.css"

import Other1 from "../assets/other_speakers_images/other-1.png"
import Other2 from "../assets/other_speakers_images/other-2.png"
import Other3 from "../assets/other_speakers_images/other-3.png"
import Other4 from "../assets/other_speakers_images/other-4.png"


const Others = () => {
  return (
    <div className="others-section">
      <div className="others-images">
        <img src={Other1} alt="image1" className="others-images-blue" />
        <img src={Other2} alt="image2" className="others-images-black"/>
        <img src={Other3} alt="image3" className="others-images-red"/>
        <img src={Other4} alt="image4" className="others-images-green"/>
      </div>
      <div className="others-descriptions">
        <h3>Loudspeaker With Incredible Sound</h3>
        <p>Experience audio like never before with our loudspeaker, designed to deliver incredible sound quality that fills any room. With crystal-clear highs, deep resonant bass, and a balanced midrange, this speaker brings every song, movie, or podcast to life. Whether you are hosting a party or enjoying a quiet night in, its powerful output ensures that every sound is heard with stunning precision.</p>
      </div>
    </div>
  )
}

export default Others
