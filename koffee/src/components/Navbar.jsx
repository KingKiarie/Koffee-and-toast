import { useState } from "react";
import "../styles/styles.scss";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="Logo">
          <img
            src="/coffee-food-and-restaurant-svgrepo-com.svg"
            alt="Coffee logo"
          />
          <span>K&T</span>
        </div>
        <div className={`links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
              <span className="pan"></span>
            </li>
            <li>
              <a href="#">Shop</a>
              <span className="pan"></span>
            </li>
            <li>
              <a href="#">About</a>
              <span className="pan"></span>
            </li>
            <li>
              <a href="#">Contact</a>
              <span className="pan"></span>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="button-ord">
            <a href="#">Buy a coffee</a>
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </nav>
    </>
  );
}
