import React from "react";
import "../../css/contact/contact.scss";
const Contact = () => {
  return (
    <div className="container">
      <h1 className="sssj">Bizimlə əlaqə</h1>
      <div className="contact-section">
        <div className="form">
          <form>
            <label>Ad və Soyad</label>
            <input type="text"  />

            <label>Email</label>
            <input type="email" />

            <label>Mesajınız</label>
            <textarea></textarea>

            <button className="contactBtn"type="submit">Göndər</button>
          </form>
        </div>

        <div className="bilgi">
          <div className="value">
            <h5>Ünvan</h5>
            <p>Ziya Bünyadov pr. 13, <br/>Bakı, Azərbaycan AZ1108
          
            </p>
          </div>

          <div className="value">
            <h5>Əlaqə nömrəsi</h5>
            <p>+994 55 226 68 88 <br/>
                +994 12 310 11 16 <br/>
                +994 55 510 24 21<br/>
                </p>
          </div>

          <div className="value">
            <h5>Email</h5>
            <p>info@avromak.az export@avromak.az</p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
