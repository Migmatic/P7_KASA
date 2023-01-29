import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

function Header() {

  return (
      <header>
          <Link class={"homeLogo"} to="/">
            <img  src={Logo}/>
          </Link>
          <nav>
            <Link to="/">
              Accueil
            </Link>
            <Link to="/about">
              A propos
            </Link>
        </nav>
      </header>
  )
}

export default Header
