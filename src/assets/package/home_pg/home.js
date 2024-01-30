import React from 'react'
import '../../css/home_pg/home.css'
import '../../css/home_pg/home.scss'
import right_arc from '../../img/images/home_pg/icon/to_right_icon.svg'
import Slider from "react-slick";


function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className='home_body container'>
      <header className='header_content'>
          <h1>Zövqü və ruhu zənginləşdirən keyfiyyətli məhsul hazırlamaqla uğur qazanırıq</h1>
          <img src={right_arc} />
      </header>

      
      <div>
      <Slider {...settings}>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
          <div>
            <h3>övqü və ruhu zənginləşdirən</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Home