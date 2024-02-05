import React from "react";
import "../../css/makara/makara.scss";
import { Helmet } from "react-helmet";
import makara_main from "../../img/images/makara_img/img1.jpg";
import makara_img2 from "../../img/images/makara_img/img2.png";
import makara_img3 from "../../img/images/makara_img/img3.png";


function Makara() {
  return (
    <>
      <Helmet>
        <title>Makara</title>
        <meta name="description" content="Makara makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="makara_section">
          <h1>MAKARA</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv makaraImg2">
              <img src={makara_main}/>
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

        <h1>kelebek məhsulları</h1>
        <section className="pastas_makara">
          <div>
            <img src={makara_img2} />
            <hr />
            <p>Makara PENNE RIGATE</p>
          </div>

          <div>
            <img src={makara_img2} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>

          <div className="noRborder">
            <img src={makara_img2} />
            <hr />
            <p>Makara PIPE RIGATE</p>
          </div>

          <div >
            <img src={makara_img2} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>

          <div>
            <img src={makara_img2} />
            <hr />
            <p>Makara VERMICELLES</p>
          </div>

          <div className="noRborder">
            <img src={makara_img2} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>

          <div className="jContStart">
            <img src={makara_img3} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>
          <div >
            <img src={makara_img2} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>
          <div className="noRborder" >
            <img src={makara_img3} />
            <hr />
            <p>Makara STORTELLI</p>
          </div>
        </section>
        </div>
    </>
  );
}

export default Makara;
