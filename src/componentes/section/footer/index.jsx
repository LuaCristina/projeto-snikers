import '@/componentes/section/footer/footer.css'
import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-title">
                <span>
                <img className="footer-icon" src={props.data.image}/>    
                </span>
                <h1>{props.data.title}</h1>
            </div>
            <div className='marcas-logos-area'>
                    {props.data.socias.map((social, index) => 
                       <a key={index} href={social.url}>
                        <img src={social.image} className='social-logo' alt="Social" />
                    </a>
                    )} 
                </div>
        
        </div>
    );
};

export default Footer;
