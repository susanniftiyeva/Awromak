import React from "react";
import "../../css/retail_pg/retail.scss";
import Image_retail from "../../img/images/retail_pg/Image_retail";
import iconrt from "../../img/icon/retail/retail-icon.png";
const retail = () => {
  return (
    <div className="container">
      <div className="section-retail">
        <div className="article-rt1">
          <div>
            <h3>“AVROMAK MMC” şirkətinin Rublyovski mağazalar şəbəkəsi</h3>
            <p>
              Şirkətin fəaliyyəti, öz istehsal sahələrinin, həmçinin
              distribüterlik etdiyi şirkətlərin məhsullarının satışını təmin
              etməyə əsaslanır. Çeşidli ət və ət məhsulları, un və un
              məhsullarının istehsalı, pərakəndə və topdan satışı ilə məşğuldur.
            </p>
          </div>
          <img src={Image_retail.rectangle30} />
        </div>

        <div className="katalog">
          <div className="ktlg-logo">
            <img src={iconrt} />
            <h3> RUBLYOVSKİ KATALOQU </h3>
          </div>

          <div className="ktlg-btn">
            <p>
              “RUBLYOVSKİ” haqqında ətraflı məlumat əldə etmək üçün kataloqu
              yükləyə bilərsiniz.
            </p>
            <button>Kataloqu yüklə</button>
          </div>
        </div>

        <div className="h3">
        <h3>Mağazalarımız</h3>
        </div>
        
        <div className="shops">
        
        <div className="shop">
          <img src={ Image_retail.rectangle31}/>
          <p>62 Bakıxanov küçəsi,  7/24</p>
          <hr/>
          <p> Əlaqə : +994 51 229 97 41</p>
          <hr/>
          <p>Email : rublyovskiyazerbaijan@gmail.com</p>
          <hr/>
        </div>

        <div className="shop">
          <img src={ Image_retail.rectangle32}/>
          <p>Miresedulla Mirqasimov küç 15</p>
          <hr/>
          <p>Əlaqə : +994 51 229 97 41</p>
          <hr/>
          <p>Email : rublyovskiyazerbaijan@gmail.com</p>
          <hr/>
        </div>

        <div className="shop">
          <img src={ Image_retail.rectangle31}/>
          <p>Badamdar şosesi (Bazarstore ilə üzbəüz)</p>
          <hr/>
          <p> Əlaqə : +994 51 229 97 41</p>
          <hr/>
          <p>Email : rublyovskiyazerbaijan@gmail.com</p>
          <hr/>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default retail;
