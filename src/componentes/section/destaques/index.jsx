import '@/componentes/section/destaques/destaques.css'
 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardRedondo from 'src/componentes/section/destaques/componentes/CardRedondo.jsx';

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

const Destaques = (props) => {
    return (
        <section>
            <div className="produtos-container">

              <div className="produtos-section-title">{props.data.title}</div>

            
              <Slider {...settings} className="slider">
              {props.data.items.map((i, index) => 
                  <div>
                    <CardRedondo title={i.title} image={i.image} subtitle={i.subtitle}/>
                  </div>
                )}
              </Slider>  

            </div>
        </section>
    );
}

export default Destaques;






































// import Destaque1 from '@/img/destaque1.png';
// import Destaque2 from '@/img/destaque2.png';
// import Destaque3 from '@/img/destaque3.png';
// import Titulo from "@/componentes/commons/Titulo";
// import Titulo2 from "@/componentes/commons/Titulo2";
// import Tenis from "@/img/tenis_grande.png"

// const produtos = [
//     {
//         title: 'Basketball',
//         img: Destaque1
//     },
//     {
//         title: 'LifeStyle',
//         img: Destaque2
//     }, {
//         title: 'Performance',
//         img: Destaque3
//     },
// ]

// export default function Destaques() {
//     return (
//         <section>
//             <div className="destaques-container">
//                 destaques destques
//             </div>
//         </section>
//         // <section>
//         //     <div className="destaques-container borda">
//         //         {produtos.map((produto) => (
//         //             <div key={produto.title} className='container'>
//         //                 <div>
//         //                     <div className='titulosDestaques'>{produto.title}</div>
//         //                     <img className='imgDestaques' src={produto.img} alt={produto.title} />
//         //                 </div>
//         //             </div>
//         //         ))}
//         //     </div>
//         // </section>
//     );
// }

