import React from "react";

function Footer() {
  const data = [
    {
      title: "Email",
      text: "emrullaramilli@gmail.com",
      icon: "far fa-envelope icon",
      href: "mailto:emrullaramilli@gmail.com",
    },
    {
      title: "Phone",
      text: "+355676289932",
      icon: "fas fa-phone-alt icon",
      href: "tel:+355676289932",
    },
    {
      title: "Linkedin",
      text: "Linkedin Profile",
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/emrulla-ramilli-871441201",
    },
    {
      title: "Address",
      text: "Shijak, Durres",
      icon: "fas fa-map-marker icon",
      href: null,
    },
  ];

  return (
    <>
      <h1 className="title" id="contact">
        Contact me
      </h1>
      <footer>
        <div className="top-icon">
          <a href="#home">
            <i className="far fa-arrow-alt-circle-up"></i>{" "}
          </a>
          <span>Go to top</span>
        </div>
        {data.map(({ title, text, icon, href }) => (
          <div key={text} className="contact-card">
            <h1 className="contact-title">{title}</h1>
            <div className="icon">
              <i className={icon}> </i>
              <a href={href}>{text}</a>
            </div>
          </div>
        ))}
      </footer>
    </>
  );
}

export default Footer;
