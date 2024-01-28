import React from 'react'
import "../../css/rizzi/rizzi.scss"
import rizzi_main from "../../img/images/rizzi_img/Mask group.png"


function Rizzi() {
  return (
    <div className='conteiner'>
      <section className='section container'>
        <h1>Pasta di Rizzi </h1>
           <hr />
           
        <div className='article_img'>
          <img  src={rizzi_main}/>
          <div>

            <article>
              <h5>Tərkibi:</h5>
              <p>Bərk buğda növündən hazırlanmış un və su. Tərkibində konservant,
                  rəngləyici və digər qida əlavələri yoxdur.</p>
            </article>

            <hr/>

            <article>
              <h5>Saxlanılma şəraiti</h5>
              <p className='erkoyun'>30°C-dən çox olmayan temperaturda, havanın nisbi rütubəti 75%-dən
                 çox olmayan, təmiz və quru yerdə saxlanılmalıdır. Kənar qoxulu və
                   ziyanvericilərlə yoluxmuş mühitdən qoruyun.</p>
            </article>

            <hr/>

            <article>
              <h5>Saxlama müddəti:</h5>
              <p>24 ay</p>
            </article>

            <hr/>

            <article>
              <h5>100 QR MƏHSULUN QIDA VƏ ENERJI DƏYƏRLƏRI</h5>
              <p>Yağlar: 1.3
                 Zülallar: 10.7
                 Karbohidratlar: 68.4
                 Enerji dəyəri (KKAL): 328,1</p>
            </article>
            <hr/>

          </div>
        </div>
      </section>


      
      <section>

      </section>

    </div>
  )
}

export default Rizzi