import 'src/componentes/section/destaques/componentes/CardRedondo.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-image" src={props.image}/>
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>
      <button></button>
    </div>
  )
}

export default Card;