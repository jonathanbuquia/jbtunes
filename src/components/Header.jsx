import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

// import { motion } from "framer-motion";

const Header = () => {

  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  }


  return (
    <header

    >
      <h1>JB-TUNES</h1>
      <ul className={menu ? "menu" : "hamburger-menu" }>
        <li className="list-items"><a href="#">Home</a></li>
        <li className="list-items"><a href="#">Shop</a></li>
        <li className="list-items"><a href="#">Contacts</a></li>
      </ul>
      <div className="icons">
        <a href="#"><CiSearch className="icon-image"/></a>
        <a href="#"><CiShoppingBasket className="icon-image"/></a>
        <a href="#"><VscAccount className="icon-image"/></a>
      </div>
      <a href="#" className="btn-hamburger" onClick={toggleMenu}>{menu ? <RxHamburgerMenu className="hamburger-icon"/> : <IoMdClose className="hamburger-icon"/>}</a>
    </header>

  )
}

export default Header
