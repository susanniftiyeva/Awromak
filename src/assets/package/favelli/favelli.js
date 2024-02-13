import React, { useState, useEffect } from "react";
import "../../css/favelli/favelli.scss";
import { Helmet } from "react-helmet";
import favelli_main from "../../img/images/favelli_img/img1.jpg";
import favelli_img2 from "../../img/images/favelli_img/img2.png";
import favelli_img3 from "../../img/images/favelli_img/img3.png";
import favelli_img4 from "../../img/images/favelli_img/img4.png";
import favelli_img5 from "../../img/images/favelli_img/img5.png";
import favelli_img6 from "../../img/images/favelli_img/img6.png";
import favelli_img7 from "../../img/images/favelli_img/img7.png";
import favelli_img8 from "../../img/images/favelli_img/img8.png";
import favelli_img9 from "../../img/images/favelli_img/img9.png";
import favelli_img10 from "../../img/images/favelli_img/img10.png";
import favelli_img11 from "../../img/images/favelli_img/img11.png";
import favelli_img12 from "../../img/images/favelli_img/img12.png";
import axios from "axios";

function Favelli() {
  const [images, setImages] = useState([]);
  axios.get("https://dummyjson.com/products/4/").then((response) => {
    // console.log(response.data.images);
    setImages(response.data.images);
  });
  const [items, setItems] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/products/5/")
      .then((resp) => {
        console.log(resp.data);
        setItems([resp.data]); // Sunucudan gelen veriyi diziye dönüştürerek items değişkenine atar
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>Favelli</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      <div className="custon_container ">
        <section className="favelli_section">
          <h1 className="pastaBasliq">FAVELLI</h1>
          {/* <hr /> */}

          <div className="article_img">
            <div className="articleImgDiv favelliImg3">
              <img src={favelli_main} />
            </div>

            <div className="border_div">
              {/* <hr /> */}

              <article>
                <h5>Tərkibi:</h5>
              
                  {
                    items.map((item) => {
                      return (
                        <p>
                          {item}
                        </p>
                      )
                    })
                  }
              
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

        <h1 className="pastaBasliq">favelli məhsulları</h1>
        <section className="pastas_favelli">
          {images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image} alt="image" />
                <hr />
                <p>FAVELLİ PIPE RIGATE</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Favelli;
