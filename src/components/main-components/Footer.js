import React from "react";
import iconEmail from "../../image/email.png";
import iconCallUs from "../../image/callUs.png";
import iconMainLocation from "../../image/mainLocation.png";

const contactItem = [
  { image: iconEmail, title: "email", content: "tft@email.com" },
  { image: iconCallUs, title: "call us", content: "567-123-774" },
  {
    image: iconMainLocation,
    title: "main location",
    content: "Cracow, Dietla 23"
  }
];

const Footer = () => {
  const contact = contactItem.map((item, i) => {
    return (
      <div key={i} className="contact__item">
        <img src={item.image} alt={item.title} className="contact__image" />
        <p className="contact__title">{item.title}</p>
        <p className="contact__content">{item.content}</p>
      </div>
    );
  });

  return (
    <footer className="footer">
      <div className="contact">{contact}</div>
      <div className="copyright">
        <p className="copyright__text">
          DevelopMeg 2019 &copy; All right reserved
        </p>

        <p className="copyright__text">
          Individual icons in page by{" "}
          <a className="copyright__link" href=" https://icons8.com/icons">
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
