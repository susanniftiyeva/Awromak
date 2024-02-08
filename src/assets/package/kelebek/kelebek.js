import React from "react";
import "../../css/kelebek/kelebek.scss";
import { Helmet } from "react-helmet";
import kelebek_mainK from "../../img/images/kelebek_img/mask_group.jpg";
import kelebek_img1 from "../../img/images/kelebek_img/img1.png";
import kelebek_img2 from "../../img/images/kelebek_img/img2.png";
import kelebek_img6 from "../../img/images/kelebek_img/img6.png";
import kelebek_img5 from "../../img/images/kelebek_img/img5.png";
import kelebek_img4 from "../../img/images/kelebek_img/img4.png";
import kelebek_img3 from "../../img/images/kelebek_img/img3.png";
import kelebek_img7 from "../../img/images/kelebek_img/img7.png";
import kelebek_img8 from "../../img/images/kelebek_img/img8.png";
import kelebek_img9 from "../../img/images/kelebek_img/img9.png";
import kelebek_img10 from "../../img/images/kelebek_img/img10.png";


function Kelebek() {
  return (
    <>
      <Helmet>
        <title>Kelebek</title>
        <meta name="description" content="Kelebek makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="kelebek_section">
          <h1 className="pastaBasliq">KELEBEK</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv kelebekImg3">
              <img src={kelebek_mainK}/>
            </div>

            <div className="border_div">
              {/* <hr /> */}

              <article>
                <h5>Tərkibi:</h5>
                <p>
                  Bərk buğda növündən hazırlanmış un və su. Tərkibində
                  konservant, rəngləyici və digər qida əlavələri yoxdur.
                </p>
              </article>

              <hr />

              <article>
                <h5>Saxlanılma şəraiti</h5>
                <p className="erkoyun">
                  30°C-dən çox olmayan temperaturda, havanın nisbi rütubəti
                  75%-dən çox olmayan, təmiz və quru yerdə saxlanılmalıdır.
                  Kənar qoxulu və ziyanvericilərlə yoluxmuş mühitdən qoruyun.
                </p>
              </article>

              <hr />

              <article>
                <h5>Saxlama müddəti:</h5>
                <p>24 ay</p>
              </article>

              <hr />

              <article>
                <h5>100 QR MƏHSULUN QIDA VƏ ENERJI DƏYƏRLƏRI</h5>
                <p>
                  Yağlar: 1.3
                  <br />
                  Zülallar: 10.7
                  <br />
                  Karbohidratlar: 68.4
                  <br />
                  Enerji dəyəri (KKAL): 328,1
                </p>
              </article>
            </div>
          </div>
        </section>

        <h1 className="pastaBasliq">Kelebek məhsulları</h1>
        <section className="pastas_kelebek">
          <div>
            <img src={kelebek_img1} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={kelebek_img2} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div className="noRborder">
            <img src={kelebek_img6} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={kelebek_img5} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={kelebek_img4} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
          

          <div className="noRborder">
            <img src={kelebek_img3} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div className="jContStart">
            <img src={kelebek_img7} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
          <div className="jContStart">
            <img src={kelebek_img8} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
          <div className="noRborder">
            <img src={kelebek_img4} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
          <div className="jContStart">
            <img src={kelebek_img9} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
          <div className="jContStart">
            <img src={kelebek_img10} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
        </section>
        </div>
    </>
  );
}

export default Kelebek;
