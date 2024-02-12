import React, { useEffect, useState } from "react";
import "../../css/makara/makara.scss";
import { Helmet } from "react-helmet";
import makara_main from "../../img/images/makara_img/img1.jpg";
import makara_img2 from "../../img/images/makara_img/img2.png";
import makara_img3 from "../../img/images/makara_img/img3.png";
import makara_img4 from "../../img/images/makara_img/img4.png";
import makara_img5 from "../../img/images/makara_img/img5.png";
import makara_img6 from "../../img/images/makara_img/img6.png";
import makara_img7 from "../../img/images/makara_img/img7.png";
import makara_img8 from "../../img/images/makara_img/img8.png";
import makara_img9 from "../../img/images/makara_img/img9.png";
import axios from "axios";

function Makara() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/1").then((tit1) => {
      setTitle(tit1.data.title);
      // console.log(title)
      setPhoto(tit1.data.images);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Makara</title>
        <meta name="description" content="Makara makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="makara_section">
          <h1 className="pastaBasliq">{title}</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv makaraImg2">
              <img src={makara_main} />
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

        <h1 className="pastaBasliq">Makara məhsulları</h1>
        <section className="pastas_makara">
          {photo.map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo} />
                <hr />
                <p>Makara PENNE RIGATE</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Makara;
