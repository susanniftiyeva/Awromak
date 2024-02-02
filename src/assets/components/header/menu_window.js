import React from 'react'
import { Link } from 'react-router-dom'
import up_icon from '../../img/images/home_pg/icon/bot_icon.svg'

function Menu_window() {
  return (
    <div className='menu_window'>
      <ul>
        <li>
          <Link to="/about">Haqqımızda</Link>
          <img src={up_icon} alt='up icon'/>
        </li>
        <li>
          <Link to="/istehsalat">İstehsalat</Link>
        </li>
        <li>
          <Link to="/retail">Retail</Link>
        </li>
        <li>
          <Link to="/export">İxrac</Link>
        </li>
        <li>
          <Link to="/contact">Əlaqə</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu_window