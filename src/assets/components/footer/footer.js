import React from 'react'
import { Link } from 'react-router-dom'
import footer_img1 from '../../img/images/footer_img/footer1.png'
import footer_img2 from '../../img/images/footer_img/footer2.png'
import footer_img3 from '../../img/images/footer_img/footer3.png'
import footer_img4 from '../../img/images/footer_img/footer4.png'
import footer_img5 from '../../img/images/footer_img/footer5.png'
import up_arch from '../../img/icon/footer/sml_up_arch.svg'

function Footer() {
  return (
    <div className='footer_body'>
      <div className='footer_img_div'>
        <img src={footer_img1} alt='footer_img'/>
        <img src={footer_img2} alt='footer_img'/>
        <img src={footer_img3} alt='footer_img'/>
        <img src={footer_img4} alt='footer_img'/>
        <img src={footer_img5} alt='footer_img'/>
      </div>

      <footer className='container footer_content'>

      <div className='foooter_logo_div'>
        <h1>AVROMAK</h1>
      </div>
      <div className='footer_contacts'>
        <ul>
          <li><Link to='/about' >Haqqımızda</Link></li>
          <li><Link to='/production'>İstehsalat</Link></li>
          <li><Link to='/retail'>Retail</Link></li>
          <li><Link to='ixrac'>İxrac</Link></li>
          <li><Link to='/contact'>Əlaqə</Link></li>
        </ul>
        <ul>
          <li>
            <Link to='/instagram' >İnstagram</Link>
            <img src={up_arch} />
          </li>
          <li>
            <Link to='/facebook' >Facebook</Link>
            <img src={up_arch} />
          </li>
          <li>
            <Link to='/twitter' >Twitter</Link>
            <img src={up_arch} />
          </li>
          <li>
            <Link to='/linkedin' >Linkedin</Link>
            <img src={up_arch} />
          </li>
        </ul>
      </div>

      <div className='footer_address'>
        <ul>
          <li>
          Ünvan: <strong>Ziya Bünyadov pr. 13, <br/>
                        Bakı, Azərbaycan AZ1108</strong>
          </li>
          <li>
          İş vaxtı: <strong>08.00 – 17:00/Be – Cm</strong>
          </li>
          <li>
          Email: <strong>office@avromak.az</strong>
          </li>
          <li>
          Telefon: <strong>(+994) 012 310 11 16</strong>
          </li>
        </ul>
      </div>
      <hr className='footer_hr'/>
      <div className='last_address'>
        <p>2022 Avromak MMC  |  Bütün hüquqlar qorunur</p>
        <p>Design and development by Martian Studio</p>
      </div>
      </footer>
    </div>
  )
}

export default Footer