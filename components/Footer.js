import React from "react";

function Footer() {
  return (
    <div className="footer-cont">
      <h1 className="title">Contact me</h1>
      <footer>
        <div className="card-footer">
          <div className="d">Email</div>
          <div className="div">
            {" "}
            <i
              style={{ color: "rgb(16, 16, 41)" }}
              className="far fa-envelope icon"
            ></i>
            <a href="mailto:emrullaramilli@gmail.com">
              emrullaramilli@gmail.com
            </a>
          </div>{" "}
        </div>

        <div className="card-footer">
          <div className="d">Address</div>
          <div className="div">
            <i
              style={{ color: "rgb(16, 16, 41)" }}
              className="fas fa-map-marker icon"
            ></i>
            <address>Shijak, Durres</address>
          </div>
        </div>
        <div className="card-footer">
          <div className="d">Phone number</div>
          <div className="div">
            <i
              style={{ color: "rgb(16, 16, 41)" }}
              className="fas fa-phone-alt icon"
            ></i>
            <a href="tel:+355676289932">+355676289932</a>
          </div>
        </div>
        <div className="card-footer">
          <div className="d">Linkedin</div>
          <div className="div">
            <i
              style={{ color: "rgb(16, 16, 41)" }}
              className="fab fa-linkedin"
            ></i>
            <a href="#">Linkedin Profile </a>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}

export default Footer;
