import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navigation.css";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    alert("are you sure..");
  };
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
   
    <nav className="nav">
      <div className="nav__brand">
        EatNow
      </div>
      <ul className={active}>
        <li className="nav__item">
          {/* <div href="Home" className="nav__link">
            Home
          </div> */}
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav__link">
            About
          </a> */}
           <a href="/about" >About</a>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav__link">
            Order details
          </a> */}
                    <Link to="/orderdetails">OrderDetail</Link>

        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav__link">
            Cart
          </a> */}
          <Link to="/cart">Cart</Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav__link">
            Contact
          </a> */}
          <Link to="/contact">Contact</Link>
        </li>
        <div>
          {isLoggedIn ? (
            <div>
              <button onClick={handleLogoutClick} className="btn-header">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={handleLoginClick} className="btn-header">
              Login
            </button>
          )}
        </div>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
