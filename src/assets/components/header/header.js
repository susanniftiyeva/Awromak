import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

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