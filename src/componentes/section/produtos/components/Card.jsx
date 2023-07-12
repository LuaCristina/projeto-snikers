import "./card.css"

const Card = (props) => {
  return (
    <div className="card-container">
      <a href={props.url}>
        <img className="card-image" src={props.image}/>
        <div className="card-title" >{props.title}</div>
      </a>
    </div>
  )
}

export default Card