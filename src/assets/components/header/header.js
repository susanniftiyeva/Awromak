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
                <Link to="/" >Rizzi</Link>
            </li>
        </ul>




    </div>
  )
}

export default Header