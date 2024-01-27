import React from "react";
import "../../css/production_pg/production.scss";
import Image from "../../img/images/production_pg/Image";
const Production = () => {
  return (
    <div className="container">
      <div className="section">
        <h1 className="border-bottom">
          Avromak şirketi yarandigi gunden keyfiyyetli mehsul ve mehsullarin
          vaxtinda unvana chatdirilma prinsipleri esasinda hem yerli hem de
          xarici bazarda genish nufuz qazanmishdir.
        </h1>
        <img className="img1"  src={Image.image82} />
        <p>
          Avromak MMC olaraq, qurulduğumuz gündən gücünü torpaqdan alan kənd
          təsərrüfatı məhsullarımızla fəaliyyət göstəririk. İnvestisiyalarımızı
          edərkən, biz bunu ekoloji cəhətdən davamlı, sosial cəhətdən
          məsuliyyətli və iqtisadi artımı dəstəkləyən bir strategiya ilə edirik.
          Sahelerimizden elde olunan bugda mehsullari Fabrikimizde uyudulerek
          onlardan Un ve Makaron yeyinti mehsullari elde olunur. Un ve Makaron
          Mehsularimizin erseye getirilmesinde yuksek ixtisasli
          emekdashlarimizin boyuk emeyi vardir. Istehsalat avadanliqlari
          butunlukle Italiya istehsalidir. Qloballaşan kənd təsərrüfatı siyasəti
          taxıl istehsalına marağı artırır və kənd təsərrüfatı istehsalında
          monokulturaya önəm verir. İstehsalın dəyişməsi ilə yanaşı, gəlir
          səviyyəsinin dəyişməsi və sürətli urbanizasiya kənd təsərrüfatı
          məhsullarına olan tələbata qidalanma vərdişlərindən tutmuş ərzaq
          təminatına qədər fərqli ölçülər əlavə edir.
        </p>
        <div className="parent">
          <div className="hektar">
          <span >
          12000 ha  
        </span>  
        <span >
        2500 m<sup>2</sup>
        </span>
          </div>
          <hr/>
          
          <div className="sahe">
          <span >
          ƏKİN SAHƏSİ
        </span>  
        <span >
          İSTEHSAL SAHƏSİ
        </span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Production;
