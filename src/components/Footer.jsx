import "./Footer.css"

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoDesktop } from "react-icons/io5";




const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-store flex">
          <h3 className="logo ">JB-TUNES</h3>
          <p className="footer-p">info@jbtunes.com</p>
          <p className="footer-p">+63 999 999 9999</p>

          <div className="social-media">
            <a href="#" className="footer-a"><FaInstagramSquare className="sm-icons"/></a>
            <a href="#" className="footer-a"><FaLinkedin className="sm-icons"/></a>
            <a href="#" className="footer-a"><FaFacebookSquare className="sm-icons"/></a>
            <a href="#" className="footer-a"><FaTwitterSquare className="sm-icons"/></a>
          </div>
        </div>

        <div className="footer-blog flex">
          <h3>Blog</h3>
          <a href="#"  className="footer-a">Company</a>
          <a href="#"  className="footer-a">Career</a>
          <a href="#" className="footer-a">Mobile</a>
          <a href="#" className="footer-a">How it works</a>
        </div>

        <div className="footer-about flex">
          <h3>About</h3>
          <a href="#" className="footer-a">Contacts</a>
          <a href="#" className="footer-a">About Us</a>
          <a href="#" className="footer-a">FAQ</a>
          <a href="#" className="footer-a">Terms of Service</a>
        </div>

        <div className="footer-product flex">
          <h3>Product</h3>
          <a href="#" className="footer-a">Terms of Use</a>
          <a href="#" className="footer-a">Privacy Policy</a>
          <a href="#" className="footer-a">Log In</a>
        </div>

        <div className="footer-download flex">
          <h3>Download App</h3>
          <div>
            <div className="download-section"> <FaGooglePlay className="footer-icon"/>  <a href="#"  className="footer-a">Google Play</a> </div>
            <div className="download-section"> <FaApple className="footer-icon"/>       <a href="#" className="footer-a">Apple Store</a> </div>
            <div className="download-section"> <IoDesktop className="footer-icon"/>     <a href="#" className="footer-a">Desktop</a>     </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
