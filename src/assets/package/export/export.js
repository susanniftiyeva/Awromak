import React from "react";
import "../../css/export/export.scss";
import heroExport from "../../img/images/export/ex1.svg";
import heroExport2 from "../../img/images/export/exportAdami.jpg";

function Export() {
  return (
    <div className="exportBody custon_container">
      <section className="heroContent">
        <h2>
          Avromak yarandığı gündən keyfiyyət, məhsul və vaxtında çatdırılma
          prinsipləri sayəsində həm yərli həm də xarici miqyasda nüfuzunu
          qazanmışdır.
        </h2>
        <div>
          <img src={heroExport} />
        </div>
      </section>

      <section className="exportContent">
        <div className="exportContent1">
          <div className="rightBorder">
            <h3>
              Export <br /> haqqında
            </h3>
          </div>
          <div>
            <p>
              Avromak MMC Azərbaycan`ın qabaqcıl makaron,un və ət məhsulları
              istehsalı və ixracı eləyən şirkətlərindən biridir. Avromak
              yarandığı gündən keyfiyyət, məhsul və vaxtında çatdırılma
              prinsipləri sayəsində həm yərli həm də xarici miqyasda nüfuzunu
              qazanmışdır. Şirkətimiz istehsal etdiyi məhsulun 90%-ni öz
              brendləri olan Favelli, Kələbək və Makara ilə ixrac bazarlarında
              satır. Güclü, gənc və dinamik ixracat komandası dünyanın bir çox
              sərgi və tədbirlərində iştirak edərək Avromak markalarının məqsəd
              və hədəflərinə uyğun olaraq fəaliyyətini davam etdirir.
            </p>
            <br />
            <p>
              Avromak-ın ixrac etdiyi ölkələr arasında İordaniya, İran, İraq,
              BƏƏ, Suriya, Nigeriya, Liviya, İndoneziya, Malayziya, Tayland,
              Koreya və Gürcüstan var. Şirkət gələcəkdə ixrac şəbəkəsini
              təkmilləşdirmək üçün işlərini davam etdirir. Avromak, müştəriləri
              qarşısında götürdüyü öhdəlikləri hər zaman tam və vaxtında yerinə
              yetirəcəyini öhdəsinə götürür.
            </p>
          </div>
        </div>

        <div className="exportContent2">
          <div className="imgDiv2">
            <img src={heroExport2} />
          </div>

          <div className="exportForm">
            <h5>Export form</h5>
            <form>
              <div>
                <input type="text" placeholder="Ad"></input>
                <input type="text" placeholder="Soyad"></input>
              </div>
              <div>
                <input type="e-mail" placeholder="Email"></input>
                <input type="text" placeholder="Ölkə"></input>
              </div>
              <div>
                <input type="text" placeholder="Brand"></input>
                <input type="text" placeholder="Qablaşdırma"></input>
              </div>
            </form>
              <div className="textAreaDiv">
                <textarea placeholder="Mesajınız"></textarea>
              </div>

              <div className="ExportBtnDiv">
                <button type="button">Göndər</button>
              </div>
              
          <article>
            <p>Qiymət almaq və məhsul və xidmətlərimiz haqqında daha ətraflı məlumat almaq üçün export@avromak.az ünvanına e-poçt göndərməklə və ya əlaqə formasından istifadə etməklə bizimlə əlaqə saxlaya bilərsiniz.</p>
          </article>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Export;
