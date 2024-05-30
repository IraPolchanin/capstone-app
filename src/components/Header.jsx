import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import logo from '../assets/imiges/littleLemon_logo.png';

export const Header = () => {
  return (
    <header className='header' aria-label='Site header' id='header'>
      <div className='wrapper'>
        <div className='header__content'>
          <Link to='/capstone-app' aria-label='Home'>
            <img className='header__logo logo' src={logo} alt='Little Lemon logo' />
          </Link>
          <NavBar position='header' />
        </div>
      </div>
    </header>
  );
};
