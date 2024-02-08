import React, { useEffect, useState } from "react";
import logo from '../../img/icon/header/Logo.svg'
import up_icon from '../../img/images/home_pg/icon/bot_icon.svg';
import menuLogo from '../../img/icon/header/menu_icon.svg'

const Header = (props) => {

  const [scroll, setScroll] = useState(false);
  const scrollFunc = () => {
    window.onscroll = function () {
      if (window.pageYOffset >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  };

  useEffect(() => {
    scrollFunc();
  }, []);
  

  return (
    <>
      <header
        className={`header  justify-content-between align-items-center  ${
          props.isWhite ? "white " : ""
        } ${scroll ? "active " : " "}  `}
      >
        <a type="button" href="/" className="cursor-pointer">
          <div>
          <img  className="cursor" src={logo} alt="" />
          </div>
        </a>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        
        
        <div className="menu align-items-center  position-relative">
          <ul className="p-0 nav-links my-lg-0 my-5 animated fadeInRightBig">
            <li>
              <a href="/about" className="d-flex align-items-baseline">Haqqımızda
              <img className="ms-4" src={up_icon} alt=""/>
              </a>
            </li>
            <li>
              <a href="/production" className="d-flex align-items-baseline"> İstehsalat
              <img className="ms-4" src={up_icon} alt=""/></a>
            </li>
            <li>
              <a href="/retail" className="d-flex align-items-baseline">Retail
              <img className="ms-4" src={up_icon} alt=""/></a>
            </li>
            <li>
              <a href="/export" className="d-flex align-items-baseline"> İxrac <img className="ms-4" src={up_icon} alt=""/> </a>
            </li>
            <li>
              <a href="/contact" className="d-flex align-items-baseline"> Əlaqə <img className="ms-4" src={up_icon} alt=""/></a>
            </li>
          </ul>

        </div>
      </header>
    </>
  );
};

export default Header;
