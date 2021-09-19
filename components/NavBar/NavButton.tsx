import React from 'react'
import Link from 'next/link'
import { NavIcon, NavButton } from './styles'

const NavButtonComponent = (props: any) => (
  <Link passHref href={props.path}>
    <NavButton>
      <NavIcon>{props.icon}</NavIcon>
    </NavButton>
  </Link>
)

export default NavButtonComponent
