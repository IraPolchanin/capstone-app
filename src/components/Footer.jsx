import React from 'react'
import { NavBar } from './NavBar'
import { SocialsLinks } from './SocialsLinks'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__nav'>
        <NavBar position='footer'/>
      </div>
      <div className='footer__contact'>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
      <div className='footer__contact'>
       <SocialsLinks />
      </div>
    </footer>
  )
}
