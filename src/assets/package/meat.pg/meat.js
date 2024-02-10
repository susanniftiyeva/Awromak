import React, { useState } from "react";
import "../../css/meat_pg/meat.scss";
import "../../img/images/meat_pg/Image_meat";
import Image_meat from "../../img/images/meat_pg/Image_meat";
import axios from "axios";

const Meat = () => {

  const [meatImg, setMeatImg] = useState();

  axios.get("https://dummyjson.com/products/1")
  .then((resp) => {
    setMeatImg(resp.data);

  });
  // console.log(meatImg)
  return (
    <div className="custon_container">
      <div className="meat-section">
        <div className="article-mt1">
          <div>
            <h3>“AVROMAK MMC” şirkətinin ət məhsulları istehsalatı</h3>
            <div className="mobileImg">
              <img src={meatImg?.thumbnail} />
            </div>
              <p>{meatImg?.description}</p>
          </div>
          <div className="desktopImg">
            {" "}
            <img src={meatImg?.thumbnail} />
          </div>
        </div>

        <div className="article-mt2">
          
          <h3 key={''}>{meatImg?.brand}</h3>
          <div className="production">
     

            {meatImg?.images.map(image => {
              return (
                <div>
                  <img src={image} />
                  <hr />
                  <p>Dadım</p>
                  <hr />
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Meat;
