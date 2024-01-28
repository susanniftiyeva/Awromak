import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icon/header/Logo.svg'

function Header() {
  return (
    <div className='header_body container'>
        <div>
            <img src={logo} alt='logo'/>
        </div>
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
                <Link to="/menu_window" >= Menu</Link>
            </li>
            <li>
                <Link to="/about" >About</Link>
            </li>
        </ul>




    </div>
  )
}

export default Header