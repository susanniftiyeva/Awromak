import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../css/home_pg/home.css";
import "../../css/home_pg/home.scss";
import right_arc from "../../img/images/home_pg/icon/to_right_icon.svg";
import up_arch from "../../img/icon/home/right_up.svg";
import main_img_header from "../../img/images/home_pg/img1.png";
import main_img_header2 from "../../img/images/home_pg/img2.png";
import main_img_header3 from "../../img/images/home_pg/img3.png";
import main_img_header4 from "../../img/images/home_pg/img4.png";
import main_img_header5 from "../../img/images/home_pg/img5.png";
import slide_img1 from "../../img/images/home_pg/slide icons/slide1.png";
import slide_img2 from "../../img/images/home_pg/slide icons/slide2.png";
import slide_img3 from "../../img/images/home_pg/slide icons/slide3.png";
import slide_img4 from "../../img/images/home_pg/slide icons/slide4.png";
import slide_img5 from "../../img/images/home_pg/slide icons/slide5.png";
import slide_img6 from "../../img/images/home_pg/slide icons/slide6.png";
import slide_img7 from "../../img/images/home_pg/slide icons/slide7.png";
import hSlideimg2 from "../../img/images/home_pg/slide icons/headerSlide2.png";
import hSlideimg3 from "../../img/images/home_pg/slide icons/headerSlide3.png";
import hSlideimg4 from "../../img/images/home_pg/slide icons/headerSlide4.png";
import hSlideimg5 from "../../img/images/home_pg/slide icons/headerSlide5.png";
import { Helmet } from "react-helmet";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",

  }

  return (
    <div className="home_body custon_container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      <header className="header_content">
        <h1>
          {" "}
          Zövqü və ruhu zənginləşdirən keyfiyyətli məhsul hazırlamaqla uğur
          qazanırıq
        </h1>
        <img src={right_arc} />
      </header>

      <div className="home_slider_txt">
        <Slider {...settings}>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
          <div>
            <h3>Keyfiyyət rəmzimizdir</h3>
          </div>
        </Slider>
      </div>

      <section className="home_content">
        <div className="biger_img_home absoluteImgDiv top330">
          <Slider {...setting}>
            <div>
              <img src={main_img_header} />
            </div>

            <div>
              <img src={hSlideimg2} />
            </div>

            <div>
              <img src={hSlideimg3} />
            </div>

            <div>
              <img src={hSlideimg4} />
            </div>

            <div>
              <img src={hSlideimg5} />
            </div>
          </Slider>
        </div>

        <div className="second_part">
          <img className="secondPheroImg" src={main_img_header2} />
          <div className="second_part_txt">
            <article>
              <p>
                Avromak MMC istehsal sahəsində peşəkar və təcrübəyə malik
                şirkətlərdən biridir. Çeşidli ət və ət məhsulları, un və un
                məhsullarının istehsalı, pərakəndə və topdan satışı ilə
                məşğuldur.
              </p>
              <p>
                Məhsullarımız, tam gigiyenik şəraitdə və innovativ
                texnologiyalar vasitələr ilə istehsal olunur. Mehriban və
                peşəkar komanda ilə Avromak MMC qoyduğu hədəflərə çatmaqdadır.
                Məhsullarımız AZS 731-2012 “Halal Qida” sertifkatına layiq
                görülmüşdür.
              </p>
            </article>
            <Link to="/">
              <p>KEYFİYYƏT RƏMZİMİZDİR</p> <img src={up_arch} />{" "}
            </Link>
          </div>
        </div>
      </section>

      <h2 className="altbashliq">Məhsullarımız</h2>
      <section className="mehsullar_section">
        <div className="mehsullar_div">
          <div className="mehsul_img">
            <img src={main_img_header3} />
            <h6 className="mehsul_header">Ət məhsulları</h6>
          </div>

          <div>
            <Link to="/meat">
              <h5>Rosko</h5>
              <img src={up_arch} />
            </Link>
            <Link to="/meat">
              <h5>Ustdad</h5>
              <img src={up_arch} />
            </Link>
            <Link to="/meat">
              <h5>Dadim</h5>
              <img src={up_arch} />
            </Link>
          </div>
        </div>

        <div className="mehsullar_div">
          <div className="mehsul_img">
            <img src={main_img_header4} />
            <h6 className="mehsul_header">Makaron</h6>
          </div>
          <div>
            <Link to="/favelli">
              <h5>Favelli</h5>
              <img src={up_arch} />
            </Link>
            <Link to="/makara">
              <h5>Makara</h5>
              <img src={up_arch} />
            </Link>
            <Link to="/kelebek">
              <h5>Kelebek</h5>
              <img src={up_arch} />
            </Link>
            <Link to="/rizzi">
              <h5>Rizzi</h5>
              <img src={up_arch} />
            </Link>
          </div>
        </div>

        <div className="mehsullar_div">
          <div className="mehsul_img">
            <img src={main_img_header5} />
            <h6 className="mehsul_header">Un məhsulları</h6>
          </div>
          <div>
            <Link to="/flour">
              <h5>Un məhsulları</h5>
              <img src={up_arch} />
            </Link>
          </div>
        </div>
      </section>

      <article className="brendler">
        <p>BRENDLƏR</p>
        <p>
          “Avromak” MMC-nin əsas məqsədi istehsal və distribüterlik etdiyi{" "}
          <br /> məhsulların çeşidlərinin və keyfiyyətinin
          optimallaşdırılmasıdır.
        </p>
      </article>

      <div className="absoluteImgDiv bottom200">
      <Slider {...settings2} className="slide2">
        <div>
          <img src={slide_img1} />
        </div>
        <div>
          <img src={slide_img2} />
        </div>
        <div>
          <img src={slide_img3} />
        </div>

        <div>
          <img src={slide_img4} />
        </div>

        <div>
          <img src={slide_img5} />
        </div>
        <div>
          <img src={slide_img6} />
        </div>
        <div>
          <img src={slide_img7} />
        </div>

        <div>
          <img src={slide_img4} />
        </div>

        <div>
          <img src={slide_img1} />
        </div>
        <div>
          <img src={slide_img2} />
        </div>
        <div>
          <img src={slide_img3} />
        </div>
        <div>
          <img src={slide_img4} />
        </div>
        <div>
          <img src={slide_img5} />
        </div>
        <div>
          <img src={slide_img6} />
        </div>
        <div>
          <img src={slide_img7} />
        </div>

        <div>
          <img src={slide_img4} />
        </div>
      </Slider>
      </div>

    </div>
  );
}

export default Home;
