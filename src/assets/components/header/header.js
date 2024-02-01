import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icon/header/Logo.svg'
import menuLogo from '../../img/icon/header/menu_icon.svg'
import { Route, Routes } from 'react-router-dom';
import Menu_window from './menu_window';
import { useState, useEffect } from 'react';

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      function handleOutsideClick(event) {
        if (isMenuOpen && !event.target.closest('#menu_w_div') && !event.target.closest('button')) {
          setMenuOpen(false);
        }
      }
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [isMenuOpen]);
  
    function toggleMenu() {
      setMenuOpen(!isMenuOpen);
    }




  return (

   

  

        <div className='header_body container'>

            <Link to='/'>
                <img src={logo} alt='logo'/>
            </Link>
            
            <ul className='menu'>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/rizzi" >Rizzi</Link>
                </li>
                <li>
                    <Link to="/production" >Production</Link>
                </li>
                <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to="/retail" >Retail</Link>
            </li>
                <li>
                    {/* <Link to="/menu_window" >= Menu</Link> */}
                    <div className='menu_icons'>
                        <span>
                            <img src={menuLogo} alt='logo'/>
                            <img src={menuLogo} alt='logo'/>
                        </span>

                         <button className='menu_btn' onClick={toggleMenu}>Menu</button>
                    </div>
                </li>
            </ul>
            

            {isMenuOpen && (

                <div id='menu_w_div'>
                    <Menu_window />
                </div>

            )}
      
        </div>
  )
}

export default Header