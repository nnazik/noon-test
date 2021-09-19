import React from 'react'
import NavButton from './NavButton'
import { NavBar } from './styles'

const NavBarComponent = (props: any) => (
  <NavBar>
    {props.navButtons.map((button: any) => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </NavBar>
)

export default NavBarComponent
