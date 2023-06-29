// import '@/componentes/section/produtos/produtos.scss'
// import Card from './components/Card'; 
// import React, { useState, useEffect } from 'react'
import Destaque1 from "@/img/destaque1.png"
import Destaque2 from "@/img/destaque2.png"
import Destaque3 from "@/img/destaque3.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './components/Card';

import './produtos.css'

const items = [
  {
    title: "Title 1",
    produtos : [
      {
          title: 'Basketball 1',
          img:  Destaque1 
      },
      {
          title: 'LifeStyle 1',
          img: Destaque2 
      },
      {
          title: 'Performance 1',
          img: Destaque3 
      }
    ]
  },
  {
    title: "Title 2",
    produtos : [
      {
          title: 'Basketball 2',
          img:  Destaque1 
      },
      {
          title: 'LifeStyle 2',
          img: Destaque2 
      },
      {
          title: 'Performance 2',
          img: Destaque3 
      }
    ]
  },
  {
    title: "Title 3",
    produtos : [
      {
          title: 'Basketball 3',
          img:  Destaque1 
      },
      {
          title: 'LifeStyle 3',
          img: Destaque2 
      },
      {
          title: 'Performance 3',
          img: Destaque3 
      }
    ]
  },

]

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  centerPadding: "50px",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


export default function Produtos() {


    return (
        <section>
            <div className="produtos-container">

              <div className="produtos-section-title">NOSSOS PRODUTOS</div>

              {items.map((i, index) => 
                <>
                  <div className="produtos-title"> {i.title} </div>
                  <Slider {...settings} className="slider">
                    {i.produtos.map((p, index) => 
                      <div>
                        <Card title={p.title} image={p.img}/>
                      </div>
                    )}
                  </Slider> 
                </>
              )}

            </div>
        </section>
    );
}

