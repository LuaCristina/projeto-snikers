const Card = (props) => {
    return (
      <li className="card">
        <span class="material-icons">{props.icon}</span>
        <p>{props.copy}</p>
      </li>
    )
  }

export default  Card;