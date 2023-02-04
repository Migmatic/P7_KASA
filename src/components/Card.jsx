import { Link } from 'react-router-dom'

function Card(props) {

  return (
    <Link class="card" to={`/lodging/${props.index}`}>
      <p class="card__title">{props.title}</p>
      <img class={"card__img"} src={props.cover} alt={props.title}></img>
      
    </Link>
  )
}

export default Card
