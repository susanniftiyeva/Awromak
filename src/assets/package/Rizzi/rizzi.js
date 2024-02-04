import React from "react";
import "../../css/rizzi/rizzi.scss";
import rizzi_main from "../../img/images/rizzi_img/Mask group.png";
import rizzi_img1 from "../../img/images/rizzi_img/img1.png";
import rizzi_img2 from "../../img/images/rizzi_img/img2.png";
import rizzi_img3 from "../../img/images/rizzi_img/img3.png";
import rizzi_img4 from "../../img/images/rizzi_img/img4.png";
import rizzi_img5 from "../../img/images/rizzi_img/img5.png";
import rizzi_img6 from "../../img/images/rizzi_img/img6.png";
import { Helmet } from "react-helmet";

function Rizzi() {
  return (
    <>
      <Helmet>
        <title>Rizzi</title>
        <meta name="description" content="Rizzi makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="rizzi_section">
          <h1>Pasta di Rizzi </h1>
          {/* <hr /> */}

          <div className="article_img">
            <img src={rizzi_main} />

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

        <h1>Pasta di Rizzi məhsulları</h1>
        <section className="pastas_rizzi">
          <div>
            <img src={rizzi_img1} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={rizzi_img2} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={rizzi_img3} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>


          <div>

          <div className="noRborder">

            <img src={rizzi_img4} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={rizzi_img5} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={rizzi_img3} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>

          <div>
            <img src={rizzi_img6} />
            <hr />
            <p>Pasta di Rizzi CONCHIGLIE</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Rizzi;
