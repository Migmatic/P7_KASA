import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../utils/style/Atoms'
/*
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'
import LightLogo from '../../assets/light-logo.png' */



import React from 'react';

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
/*
function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? DarkLogo : boudah} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

*/

function Header() {


  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo  />
      </Link>
      <div>
        <StyledLink  to="/">
          Accueil
        </StyledLink>
        <StyledLink  to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
