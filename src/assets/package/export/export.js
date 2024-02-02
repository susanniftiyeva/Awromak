import React from 'react'
import '../../css/export/export.scss'
import heroExport from '../../img/images/export/ex1.svg'
import heroExport2 from '../../img/images/export/exportAdami.jpg'

function Export() {
  return (
    <div className='exportBody custon_container'>
        <section className='heroContent'>
            <h2>Avromak yarandığı gündən keyfiyyət, məhsul və vaxtında çatdırılma prinsipləri sayəsində həm yərli həm də xarici miqyasda nüfuzunu qazanmışdır.</h2>
            <img src={heroExport} />
        </section>

        <section className='exportContent'>
            <div className='exportContent1'>
                <div className='rightBorder'>
                    <h3>Export <br/> haqqında</h3>
                </div>
                <div>
                    <p>
                        Avromak MMC Azərbaycan`ın qabaqcıl makaron,un və ət məhsulları istehsalı və ixracı eləyən şirkətlərindən biridir. Avromak yarandığı gündən keyfiyyət, məhsul və vaxtında çatdırılma prinsipləri sayəsində həm yərli həm də xarici miqyasda nüfuzunu qazanmışdır.
                        Şirkətimiz istehsal etdiyi məhsulun 90%-ni öz brendləri olan Favelli, Kələbək və Makara ilə ixrac bazarlarında satır.
                        Güclü, gənc və dinamik ixracat komandası dünyanın bir çox sərgi və tədbirlərində iştirak edərək Avromak markalarının məqsəd və hədəflərinə uyğun olaraq fəaliyyətini davam etdirir.
                    </p>
                        <br/>
                    <p>Avromak-ın ixrac etdiyi ölkələr arasında İordaniya, İran, İraq, BƏƏ, Suriya, Nigeriya, Liviya, İndoneziya, Malayziya, Tayland, Koreya və Gürcüstan var. Şirkət gələcəkdə ixrac şəbəkəsini təkmilləşdirmək üçün işlərini davam etdirir. Avromak, müştəriləri qarşısında götürdüyü öhdəlikləri hər zaman tam və vaxtında yerinə yetirəcəyini öhdəsinə götürür.</p>
                </div>
            </div>

            <div className='exportContent2'>
                <div>
                    <img src={heroExport2} />
                </div>

                <div>
                    <h5>Export form</h5>
                    <form>
                        <imput placeholder='Ad'></imput>
                    </form>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Export