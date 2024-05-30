import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classnames from 'classnames';

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
  }, [width, isMenuOpen, setIsMenuOpen]);

  useEffect(() => {
    isMenuOpen ?
      document.body.classList.add('scroll-blocked')
      : document.body.classList.remove('scroll-blocked');

    return () => {
      document.body.classList.remove('scroll-blocked');
    };
  }, [isMenuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={classnames(`${position}__nav`, 'nav', {
        'open': isMenuOpen,
      })}
    >
      <div
        className={`icon icon-menu nav__menuIcon nav__menuIcon-${position}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-controls="nav-menu"
        role="button"
        tabIndex="0"
      >
        <span className="sr-only">Toggle menu</span>
      </div>

      <ul
        id="nav-menu"
        role="menu"
        className={classnames('nav__list', `nav__list_${position}`, {
          'nav__list_header_visible': isMenuOpen && position === 'header',
        })}
        onClick={() => {
          if (isMenuOpen) {
            toggleMenu()
          }
        }}
      >
        <li className='nav__item'>
          <NavLink
            to='/capstone-app'
            end
            role="menuitem"
            className={`nav__link ${location.hash === '' && location.pathname === '/' && 'has-background-yellow'}`}
          >
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='/capstone-app#about'
            role="menuitem"
            className={`nav__link ${location.hash === '#about' && 'has-background-yellow'}`}
          >
            About
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='/capstone-app#menu'
            role="menuitem"
            className={`nav__link ${location.hash === '#menu' && 'has-background-yellow'}`}
          >
            Menu
          </HashLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='/capstone-app/booking'
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
