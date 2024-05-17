import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <img className='icon header__logo_img' src='assets/nav-logo.png' alt='little-lemon-logo' />
        <NavBar position='header' />
      </div>
    </header>
  )
}
