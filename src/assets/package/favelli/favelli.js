import React from "react";
import "../../css/favelli/favelli.scss";
import { Helmet } from "react-helmet";
import kelebek_main from "../../img/images/kelebek_img/mask_group.jpg";
import favelli_img2 from "../../img/images/favelli_img/img2.png";
import favelli_img3 from "../../img/images/favelli_img/img3.png";


function Favelli() {
  return (
    <>
      <Helmet>
        <title>Favelli</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="favelli_section">
          <h1>FAVELLI</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv">
              {/* <img src={kelebek_main}/> */}
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

        <h1>favelli məhsulları</h1>
        <section className="pastas_favelli">
          <div>
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div>
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div className="noRborder">
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div>
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div>
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div className="noRborder">
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>

          <div className="">
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>
          <div >
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>
          <div className="noRborder">
            <img src={favelli_img2} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>
          <div >
            <img src={favelli_img3} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>
          <div className="jContStart">
            <img src={favelli_img3} />
            <hr />
            <p>FAVELLİ PIPE RIGATE</p>
          </div>
        </section>
        
        </div>
    </>
  );
}

export default Favelli;
