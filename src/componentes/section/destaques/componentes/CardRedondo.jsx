import 'src/componentes/section/destaques/componentes/CardRedondo.css';

const CardRedondo = (props) => {
  return (
    <div className="cardredondo-container">
      <div className="cardredondo-image">
        <img src={props.image} alt="Imagem Redonda" />
      </div>
      <div className="cardredondo-title">{props.title}</div>
      <div className="cardredondo-subtitle">{props.subtitle}</div>
      <button className="cardredondo-button">
        Quero
        <span>
          <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png"/>    
        </span>
      </button>
    </div>
  )
}

export default CardRedondo;