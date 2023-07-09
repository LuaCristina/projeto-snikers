import "./card.css"

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-image" src={props.image}/>
      <div className="card-title" >{props.title}</div>
    </div>
  )
}

export default Card