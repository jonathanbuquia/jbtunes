import "./About.css"
import aboutPicture from "../assets/about_image.png";
import { GoDotFill } from "react-icons/go";
import Card from "./reusables/Card.jsx";
import { motion, useInView, useAnimation} from "framer-motion"
import { useRef, useEffect } from "react";

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  },[isInView]);


  return (
    <div ref={ref} className="about-section">
      <motion.div
      variants={{
        hidden: {opacity: 0},
        visible: {opacity: 1},
      }}
        initial="hidden" 
        animate={mainControls}
        transition={{duration: .5, delay: .2}}
      >
        <Card title="About Product" description="With its sleek design and durable materials, it is not just a speaker; it is an essential companion for your adventures, whether you are at home, at the beach, or hiking."/>
      </motion.div>
      <div className="details">
        <div className="about-left-container">
          <p className="highlights"><GoDotFill className="dots"/>
          Sleek, portable, and powerful—this wireless speaker delivers premium sound on the go!</p>
          <p className="highlights"><GoDotFill className="dots"/>
          Enjoy rich audio quality in a compact design, perfect for any adventure or home use.</p>
          <p className="highlights"><GoDotFill className="dots"/>
          Lightweight and stylish, our wireless speaker brings music to life wherever you are.</p>
        </div>
        <img src={aboutPicture} alt="about-picture" className="about-picture"/>
        <div className="about-right-container">
          <p className="highlights"><GoDotFill className="dots"/>
          Experience the ultimate freedom with our portable speaker—great sound and easy connectivity!</p>
          <p className="highlights"><GoDotFill className="dots"/>
          Designed for music lovers, this wireless speaker combines elegance with exceptional performance.!</p>
          <p className="highlights"><GoDotFill className="dots"/>
          Take your tunes anywhere with our durable wireless speaker, crafted for both style and sound.</p>
        </div>
      </div>
      <button className="btn about-btn">ADD TO CART</button>
    </div>
  )
}

export default About
