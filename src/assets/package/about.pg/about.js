import React from "react";
import Image_about from "../../img/images/about_pg/Image_about";
import "../../css/about_pg/about.scss";

const about = () => {
  return (
    <div className="container">
      <div className="section-about">
        <h1 className="border-bottom">
          Ağcabədi və Biləsuvar`daki 12000 hektar şəxsi ərazidən gələn Premium
          birinci sinif buğdalar Bakı`daki fabrikamızda işlənərək
          müştərilərimizə çatdırılır.
        </h1>

        <div className="article-ab1">
          <img src={Image_about.rectangle5} />
          <p>
            “Avromak” MMC 2019-cu ildə Azərbaycanda, Bakı şəhərində fəaliyyətə
            başlamışdır. Şirkətin fəaliyyəti, öz istehsal sahələrinin, həmçinin
            distribüterlik etdiyi şirkətlərin məhsullarının satışını təmin
            etməyə əsaslanır. Şirkət öz işçi qüvvəsi və nəqliyyat vasitələri ilə
            məhsulları Azərbaycanın istənilən bölgəsinə çatdırmaqdadır.
          </p>
          <span>
            “Avromak” MMC-nin əsas məqsədi istehsal və distribüterlik etdiyi
            məhsulların çeşidlərinin və keyfiyyətinin optimallaşdırılmasıdır və
            bu istiqamətdə daimi çalışır. “Avromak” MMC Bakıda yerləşən baş
            ofis, anbarlar, dəyirman, istehsal sahələri və regional filiallardan
            ibarətdir. Şirkət dünyanın müxtəlif ölkələri ilə əməkdaşlıq edir və
            bu əməkdaşlıqları genişləndirməkdədir.
          </span>
        </div>

        <div className="article-ab2">
        <div>
        <h3>Vizyonumuz</h3>
        <p>Bütün tərəfdaşlarımız və müştərilərimiz üçün davamlı olaraq dəyər yaradan yenilikçi bir şirkət olmaq</p>
        <span>Həmçinin hazırda respublikamızda mövcud olan bütün satış nöqtələrinə yüksək keyfiyyətli xidmət göstərmək, 
            alıcı rəğbəti qazanmaq, bu yolda ən son və ən müasir vasitələrdən istifadə etməkdir.</span>
        </div>
            <img src={Image_about.rectangle6}/>
        </div>
      </div>
    </div>
  );
};

export default about;
