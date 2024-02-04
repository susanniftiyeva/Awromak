import React from "react";
import "../../css/production_pg/production.scss";
import Image from "../../img/images/production_pg/Image_production";
import up_arch from '../../img/icon/home/right_up.svg';
import { Link } from 'react-router-dom';
const Production = () => {
  return (
    <div className="custon_container">
      <div className="section">
        <h1 className="border-bottom">
          Avromak şirketi yarandigi gunden keyfiyyetli mehsul ve mehsullarin
          vaxtinda unvana chatdirilma prinsipleri esasinda hem yerli hem de
          xarici bazarda genish nufuz qazanmishdir.
        </h1>

       <div className="img1Div"> <img className="img1" src={Image.image82} /></div>
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
            <span>12000 ha</span>
            <span>
              2500 m<sup>2</sup>
            </span>
          </div>
          <hr />

          <div className="sahe">
            <span>ƏKİN SAHƏSİ</span>
            <span>İSTEHSAL SAHƏSİ</span>
          </div>
          <hr />
        </div>
      </div>

    

       
       <h2 className='altbashliq'>Məhsullarımız</h2>
      <div className='mehsullar_section'>
       <div className='mehsullar_div'>
          <div className='mehsul_img'>
            <img src={Image.image83} />
            <h6 className='mehsul_header'>Ət məhsulları</h6>
          </div>

          <div>
            <Link to='/rosko'>
              <h5>Rosko</h5>
              <img src={up_arch} />
            </Link>
            <Link to='/ustad'>
              <h5>Ustdad</h5>
              <img src={up_arch} />
            </Link>
            <Link to='/dadim'>
              <h5>Dadim</h5>
              <img src={up_arch} />
            </Link>
          </div>

        </div>


        <div className='mehsullar_div'>
          <div className='mehsul_img'>
            <img src={Image.image84} />
            <h6 className='mehsul_header'>Makaron</h6>

          </div>
          <div>
            <Link to='/favelli'>
              <h5>Favelli</h5>
              <img src={up_arch} />
            </Link>
            <Link to='/makara'>
              <h5>Makara</h5>
              <img src={up_arch} />
            </Link>
            <Link to='/kelebek'>
              <h5>Kelebek</h5>
              <img src={up_arch} />
            </Link>
            <Link to='/rizzi'>
              <h5>Pasta Di Rizzi</h5>
              <img src={up_arch} />
            </Link>
          </div>
        </div>
        
        <div className='mehsullar_div'>
          <div className='mehsul_img'>
            <img src={Image.image85} />
            <h6 className='mehsul_header'>Un məhsulları</h6>
          </div>
          <div>
            <Link to='/favelli'>
              <h5>Favelli Un</h5>
              <img src={up_arch} />
            </Link>
          </div>
        </div>
       </div>
       <div/>

      <div className="section">
        <h3>Private label</h3>
        <div className="imags">
          <img className="item" src={Image.pasta1} />
          <img className="item1"src={Image.pasta2} />
          <img className="item2" src={Image.pasta3} />
        </div>
        <p>
          Keyfiyyətli, sağlam, ləzzətli makaron və unlarımız müştərilərimizin
          tələb etdiyi standartlara və spesifikasiyalara uyğun hazırlanır və
          “Avromak” MMC-nin zəmanəti ilə peşəkar işçilərimiz tərəfindən istehsal
          olunur. Biz Private Label hazırlamaqda böyük təcrübəyə malikik. Öz
          markanız varsa, markanız altında istənilən paket quruluşunu təmin edə
          bilərik. Razılaşmaya görə brendiniz olmasa belə, tələblərinizə uyğun
          olaraq öz brendinizi hazırlaya bilərik. Private Label layihəsi ilə
          bağlı istənilən vaxt bizimlə əlaqə saxlaya bilərsiniz. Təchizatçı
          olaraq biz hər zaman şəxsi etiketinizi hazırlamağa hazırıq.
        </p>
      </div>
    </div>
  );
};

export default Production;
