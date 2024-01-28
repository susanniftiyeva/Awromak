import React from 'react'
import '../../css/home_pg/home.css'
import '../../css/home_pg/home.scss'

import right_arc from '../../img/images/home_pg/icon/to_right_icon.svg'

function Home() {
  return (
    <div className='home_body container'>
      <header className='header_content'>
          <h1>Zövqü və ruhu zənginləşdirən keyfiyyətli məhsul hazırlamaqla uğur qazanırıq</h1>
          <img src={right_arc} />
      </header>
    </div>
  )
}

export default Home