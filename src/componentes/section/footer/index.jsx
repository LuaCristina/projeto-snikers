import '@/componentes/section/footer/footer.css'
import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-title">
                <div className="title-wrapper">
                    <h1>{props.data.title}</h1>
                </div>
                <div className="image-wrapper">
                    <img src={props.data.image} alt="Logo" />
                </div>
            </div>
            <div className='marcas-logos-area'>
                    {props.data.socias.map((social, index) => 
                       <a key={index} href={social.url}>
                        <img src={social.image} className='marcas-logo' alt="Social" />
                    </a>
                    )} 
                </div>
        
        </div>
    );
};

export default Footer;
