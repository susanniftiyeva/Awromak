import React, { useState } from "react";
import "../../css/contact/contact.scss";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.first_name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://test-api.aghazada-tahir.com/api/contact"
      );

      if (res.status === 201) {
        setFormData({
          first_name: "",
          email: "",
          message: ""
        });
          alert("Mesajiniz gonderildi")
      } else {
        console.log("Mesajiniz gonderilmedi")
      }
    } catch (error) {
      console.error("Error Message", error)
    }
  };

  return (
    <div className="custon_container">
      <div className="container">
        <h1 className="sssj">Bizimlə əlaqə</h1>
        <div className="contact-section">
          <div className="form">
            <form onSubmit={handleSubmit}>

              <label>Ad və Soyad</label>
              <input type="text" name="first_name"  onChange={handleChange} />

              <label>Email</label>
              <input type="email" name="email"  onChange={handleChange}/>

              <label>Mesajınız</label>
              <textarea name="message"  onChange={handleChange}></textarea>

              <button className="contactBtn" type="submit" >
                Göndər
              </button>
            </form>
          </div>

          <div className="bilgi">
            <div className="value">
              <h5>Ünvan</h5>
              <p>
                Ziya Bünyadov pr. 13, <br />
                Bakı, Azərbaycan AZ1108
              </p>
            </div>

            <div className="value">
              <h5>Əlaqə nömrəsi</h5>
              <p>
                +994 55 226 68 88 <br />
                +994 12 310 11 16 <br />
                +994 55 510 24 21
                <br />
              </p>
            </div>

            <div className="value">
              <h5>Email</h5>
              <p>info@avromak.az export@avromak.az</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
