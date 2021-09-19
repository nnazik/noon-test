import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons'

const navButtons = [
  {
    path: '/',
    icon: <FontAwesomeIcon color="white" icon={faHome} />,
  },
  {
    path: '/favorites',
    icon: <FontAwesomeIcon color="white" icon={faHeart} />,
  },
]

export default navButtons
