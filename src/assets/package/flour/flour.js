import React from "react";
import "../../css/flour/flour.scss";
import { Helmet } from "react-helmet";
import flour_main from "../../img/images/flour_img/img4.png";
import flour_img2 from "../../img/images/flour_img/img2.png";
import flour_img3 from "../../img/images/flour_img/img3.png";


function Flour() {
  return (
    <>
      <Helmet>
        <title>Un məhsulları</title>
        <meta name="description" content="Un məhsulları" />
      </Helmet>
      <div className="custon_container ">
        <section className="flour_section">
          <h1>Un məhsulları</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv flourImg2">
                <img src={flour_main}/>
            </div>

            <div className="border_div">
              {/* <hr /> */}

              <article>
                <h5>Tərkibi:</h5>
                <p>
                Bərk buğda növündən hazırlanmış un. Tərkibində konservant,
                 rəngləyici və digər qida əlavələri yoxdur.
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
                <h5>Un haqqında</h5>
                <p>
                Keyfiyyətə və ardıcıllığa üstünlük verərək, biz məhsullarımızı ən yaxşı inqrediyentlərdən və ən yaxşı təcrübələrdən istifadə edərək istehsal edirik. Məhsullarımız sənaye standartlarına cavab verən xüsusi bir müəssisədə istehsal olunur.  Biz məhsullarımızı mütəmadi olaraq keyfiyyət üçün sınaqdan keçiririk və üstün dadımız və keyfiyyətimiz ilə fəxr edirik.
                </p>
              </article>
            </div>
          </div>
        </section>

        <h1>Un məhsulları</h1>
        <section className="pastas_flour">
          <div>
            <img src={flour_img2} />
            <hr />
            <p>Favelli Un</p>
          </div>

          <div>
            <img src={flour_img3} />
            <hr />
            <p>Favelli Un</p>
          </div>
          
        </section>
        
        </div>
    </>
  );
}

export default Flour;
