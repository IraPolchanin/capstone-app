import React from 'react'

export const NavBar = ({ position }) => {
  return (
    <nav className={`${position}__nav nav`}>
      <ul className={`nav__list nav__list_${position}`}>
        <li className='nav__item'>
          <a href='/' className='nav__link'>Home</a>
        </li>
        <li className='nav__item'>
          <a href='/' className='nav__link'>About</a>
        </li>
        <li className='nav__item'>
          <a href='/' className='nav__link'>Menu</a>
        </li>
        <li className='nav__item'>
          <a href='/' className='nav__link'>Reservations</a>
        </li>
        <li className='nav__item'>
          <a href='/' className='nav__link'>Order online</a>
        </li>
        <li className='nav__item'>
          <a href='/' className='nav__link'>Login</a>
        </li>
      </ul>
    </nav>
  )
}
