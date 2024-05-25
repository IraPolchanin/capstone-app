import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import logo from '../assets/imiges/littleLemon_logo.png';

export const Header = () => {
  return (
    <header className='page__section header' aria-label='header'>
      <div className='wrapper'>
        <div className='header__content'>
          <Link to='/'>
            <img className='header__logo logo' src={logo} alt='little-lemon-logo' />
          </Link>
          <NavBar position='header' />
        </div>
      </div>
    </header>
  );
};
