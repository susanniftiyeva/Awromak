import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icon/header/Frame.png'

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
        </ul>




    </div>
  )
}

export default Header