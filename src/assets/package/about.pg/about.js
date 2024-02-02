import React from "react";
import Image_about from "../../img/images/about_pg/Image_about";
import "../../css/about_pg/about.scss";

const about = () => {
  return (
    <div className="custon_container">
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
            <p>
              Bütün tərəfdaşlarımız və müştərilərimiz üçün davamlı olaraq dəyər
              yaradan yenilikçi bir şirkət olmaq
            </p>
            <p>
              Həmçinin hazırda respublikamızda mövcud olan bütün satış
              nöqtələrinə yüksək keyfiyyətli xidmət göstərmək, alıcı rəğbəti
              qazanmaq, bu yolda ən son və ən müasir vasitələrdən istifadə
              etməkdir.
            </p>
          </div>
          <img src={Image_about.rectangle6} />
        </div>

        <div className="article-ab3">
          <img src={Image_about.image76} />
          <div>
            <h3>Misyamız</h3>
            <p>İnsanların damaqında və şüurunda qalıcı bir dad olmaq</p>
            <p>
              Müştərilərimizi və əməkdaşlarımızı dinləyərək yaranan problemləri
              ən qısa zamanda həll etməklə məmnuniyyətlərini təmin etmək ilk
              işimizdir.
            </p>
          </div>
        </div>

        <div className="article-ab4">
          <div>
            <h3>Məqsədimiz</h3>
            <p>
              Azərbaycan bazarında mövcud olan bütün ticarət nöqtələrinə yüksək
              keyfiyyətli satış xidməti göstərmək, alıcı rəğbətini qazanmaq, bu
              yolda ən son və ən müasir vasitələrdən istifadə etmək əsas
              məqsədimizdir.
            </p>
            <p>
              Fəaliyyətimiz çərçivəsində əməkdaşlıq etdiyimiz xarici
              istehsalçılarla distribüterlik səviyyəsində çalışırıq.
              Şirkətimizin müasir anbar infrastrukturuna malik olması və
              dünyanın 100-dən çox aparıcı istehsalçılarının distribüterliyini
              həyata keçirməsi inkişafımıza daima təkan verir.
            </p>
          </div>
          <img src={Image_about.rectangle7} />
        </div>

        <div className="article-ab5">
          <h1>
            Təbii tarazlığı qorumaqla biz ekoloji cəhətdən təmiz, dayanıqlı kənd
            təsərrüfatı məhsulları istehsal edir və sağlam qida təminatına önəm
            veririk.
          </h1>
          <img src={Image_about.rectangle8} />
          <p>
            Avromak MMC olaraq, qurulduğumuz gündən gücünü torpaqdan alan kənd
            təsərrüfatı məhsullarımızla fəaliyyət göstəririk.
            İnvestisiyalarımızı edərkən, biz bunu ekoloji cəhətdən davamlı,
            sosial cəhətdən məsuliyyətli və iqtisadi artımı dəstəkləyən bir
            strategiya ilə edirik. Qloballaşan kənd təsərrüfatı siyasəti taxıl
            istehsalına marağı artırır və kənd təsərrüfatı istehsalında
            monokulturaya önəm verir. İstehsalın dəyişməsi ilə yanaşı, gəlir
            səviyyəsinin dəyişməsi və sürətli urbanizasiya kənd təsərrüfatı
            məhsullarına olan tələbata qidalanma vərdişlərindən tutmuş ərzaq
            təminatına qədər fərqli ölçülər əlavə edir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
