import React from "react";
import "../../css/meat_pg/meat.scss";
import "../../img/images/meat_pg/Image_meat";
import Image_meat from "../../img/images/meat_pg/Image_meat";
const Meat = () => {
  return (
    <div className="custon_container">
      <div className="meat-section">
        <div className="article-mt1">
          <div>
            <h3>“AVROMAK MMC” şirkətinin ət məhsulları istehsalatı</h3>
            <p>
              Kolbasa İstehsal bolumunde Istehsal tam olaraq avtomatlaşdırılıb
              və prosesə daxil olan avadanlıqlarımız Almaniya, İtaliya və
              Polşadan gətirilib. Fəaliyyətimiz halallıq, düzgünlük, ekoloji
              təbiilik, daimi inkişaf, şəffaflıq və məsuliyyətlilik prinsipləri
              üzərində qurulub. Əsas fəlsəfəmiz isə alıcıların istəklərini
              diqqətlə dəyərləndirmək və bu istəklərə uyğun ən yüksək
              keyfiyyətdə məhsul ərsəyə gətirməkdir.
            </p>
          </div>
          <img src={Image_meat.image777} />
        </div>

        <div className="article-mt2">
          <h3>Ət məhsulları</h3>
          <div className="production">
            <img src={Image_meat.image778} />
            <img src={Image_meat.image778} />
            <img src={Image_meat.image778} />
          </div>

          <div className="production-name">
            <p>Dadım</p>
            <p>Üstdad</p>
            <p>Rosko</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meat;
