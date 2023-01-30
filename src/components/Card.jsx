import { Link } from 'react-router-dom'

function Card(props) {

  return (
    <Link class="card" to={`/logement/${props.id}&${props.no}`}>
      <p class="card__title">{props.title}</p>
    </Link>
  )
}

export default Card
