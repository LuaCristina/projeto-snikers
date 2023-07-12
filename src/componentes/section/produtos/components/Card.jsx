import "./card.css"

const Card = (props) => {
  return (
      <a href={props.url} target="_blank">
        <div className="card-container">
          <img className="card-image" src={props.image}/>
          <div className="card-title" >{props.title}</div>
        </div>
      </a>
  )
}

export default Card