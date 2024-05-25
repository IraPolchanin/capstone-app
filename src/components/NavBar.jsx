import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link'
import classnames from 'classnames'

export const NavBar = ({ position }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [width, setWidth] = useState(window.innerWidth);
  const getClassName = ({ isActive }) =>
    classnames('nav__link', {
      'has-background-yellow': isActive,
    });
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      isMenuOpen && setIsMenuOpen(width > 768 ? false : true)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, isMenuOpen]);

  return (
    <nav
      role="navigation"
      className={classnames(`${position}__nav`, 'nav', {
        'open': isMenuOpen,
      })}>
      <div
        className={`icon icon-menu nav__menuIcon nav__menuIcon-${position}`}
        onClick={toggleMenu}
      >
      </div>

      <ul
        role="menu"
        className={classnames('nav__list', `nav__list_${position}`, {
          'nav__list_visible': isMenuOpen,
        })}>
        <li className='nav__item'>
          <NavLink
            to='/'
            end
            role="menuitem"
            className={`nav__link ${location.hash === '' && 'has-background-yellow'}`}
          >
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#about'
            role="menuitem"
            className={`nav__link ${location.hash === '#about' && 'has-background-yellow'}`}
          >
            About
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#menu'
            role="menuitem"
            className={`nav__link ${location.hash === '#menu' && 'has-background-yellow'}`}
          >
            Menu
          </HashLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='reservations'
            role="menuitem"
            className={getClassName}
          >
            Reservations
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='orderOnline'
            role="menuitem"
            className={getClassName}
          >
            Order online
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='login'
            role="menuitem"
            className={getClassName}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
