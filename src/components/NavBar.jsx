import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ position }) => {
  return (
    <nav className={`${position}__nav nav`}>
      <ul className={`nav__list nav__list_${position}`}>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>Home</Link>
        </li>
        <li className='nav__item'>
          <Link to='about' className='nav__link'>About</Link>
        </li>
        <li className='nav__item'>
          <Link to='menu' className='nav__link'>Menu</Link>
        </li>
        <li className='nav__item'>
          <Link to='reservations' className='nav__link'>Reservations</Link>
        </li>
        <li className='nav__item'>
          <Link to='orderOnline' className='nav__link'>Order online</Link>
        </li>
        <li className='nav__item'>
          <Link to='login' className='nav__link'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}
