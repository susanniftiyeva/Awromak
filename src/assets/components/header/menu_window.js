// Menu_window.js

import React from 'react';
import { Link } from 'react-router-dom';
import up_icon from '../../img/images/home_pg/icon/bot_icon.svg';

function Menu_window({ closeMenu }) {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className='menu_window'>
      <ul>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            Haqqımızda
          </Link>
          <img src={up_icon} alt='up icon'/>
        </li>
        <li>
          <Link to="/production" onClick={handleLinkClick}>
            İstehsalat
          </Link>
        </li>
        <li>
          <Link to="/retail" onClick={handleLinkClick}>
            Retail
          </Link>
        </li>
        <li>
          <Link to="/export" onClick={handleLinkClick}>
            İxrac
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Əlaqə
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu_window;
