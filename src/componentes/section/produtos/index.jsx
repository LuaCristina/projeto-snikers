import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import Card from './components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './produtos.css'

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", width:'20px'}}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", width:'20px' }}
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

const Produtos = (props) => {
    return (
        <section>
            <div className="produtos-container">
              <div className="produtos-section-title">{props.data.title}</div>
              {props.data.items.map((i, index) => 
                <>
                  <div className="produtos-title"> {i.title} </div>
                  <Slider {...settings} className="slider">
                    {i.products.map((p, index) => 
                      <div>
                        <Card title={p.description} image={p.image}/>
                      </div>
                    )}
                  </Slider> 
                </>
              )}
            </div>
        </section>
    );
}

export default Produtos;