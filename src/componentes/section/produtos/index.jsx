import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import Card from './components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './produtos.css'

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="https://www.seton.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c0253.jpg"
      onClick={onClick} 
      className={className} 
      style={{ ...style, display: "block",   width:'50px', height:'50px'}}
    ></img>

  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="https://www.seton.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c0251.jpg"
      onClick={onClick} 
      className={className} 
      style={{ ...style, display: "block",   width:'50px', height:'50px'}}
    ></img>
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
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 700,
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
                        <Card title={p.description} url={p.url} image={p.image}/>
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