import '@/componentes/section/testemonials/testemonials.css'
import React from 'react';

const Testimonials = (props) => {
    return (
      <div className="testimonials-container">
        {props.data.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.url}></img>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
            <div className="rate">
              {
                (() => {
                  let td = [];
                  for (let i = 1; i <= testimonial.rate; i++) {
                    td.push(<td key={i}>⭐</td>);
                  }
                  return td;
                })()
              }
            </div> 
          </div>
        ))}
      </div>
    );
  };
  
  export default Testimonials;
