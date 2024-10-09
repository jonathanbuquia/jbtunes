import heroPicture from "../assets/hero/hero_picture.png";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left-container">
        <motion.span
            initial={{ y: -50 , opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ delay: .7 }}
        >MANILA
        </motion.span>

        <motion.h1 
            initial={{ x: -50 , opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ delay: .5 }}
        > WIRELESS SPEAKER
        </motion.h1>

        <motion.p
            initial={{ x: -50 , opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ delay: 1.5 }}
        >Compact, lightweight, and wireless, it offers great sound wherever you are—whether at home, outside, or traveling. Easy to carry and quick to connect, this speaker gives you the freedom to listen to your favorite tunes anytime, anywhere.
        </motion.p>
        
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2}}
        
        className="hero-btn">
          <motion.button 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{scale: 1.05}}

            className="btn">ADD TO CART
          </motion.button>

          <motion.button 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{scale: 1.05}}

            className="btn-details">VIEW DETAILS
          </motion.button>

        </motion.div>
      </div>
      <div className="right-container">
        <motion.img src={heroPicture} alt="hero-picture" 
        initial={{ x: 5 , opacity: 0}} 
        animate={{ x: 0, opacity: 1}}
        transition={{duration: 2 , delay: 1}}
        />
      </div>

    </div>
  )
}

export default Hero
