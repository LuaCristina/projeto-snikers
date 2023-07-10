import '@/componentes/section/testemonials/testemonials.css'
import React from 'react';

const Testimonials = (props) => {
  return (
    <div className="container">
        console.log(props)
      {props.data.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.content}</p>
          <div className="rate">{testimonial.rate} estrelas</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
