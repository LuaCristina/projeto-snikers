import '@/componentes/section/footer/footer.css'
import React from 'react';

const Footer = (props) => {
    return (
      <div className="footer">
        <div className="footer-title">
          <h1>{props.data.title}</h1>
          <img src={props.data.image} alt="Logo" />
        </div>
        <div className="footer-socials">
          {props.data.socias.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={social.image} alt="Social" />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Footer;
  