import React from 'react';
import { NavBar } from './NavBar';
import { SocialsLinks } from './SocialsLinks';
import { contacts } from '../data/contacts'
import logoImg from '../assets/imiges/logo-white.png'

export const Footer = () => {
  return (
    <footer className='page__section footer'>
      <div className='wrapper'>
        <div className='footer__content'>
          <div className='footer__logo-container'>
            <img className='footer__logo' src={logoImg} alt="logo" />
          </div>
          <div className='footer__nav'>
            <h4>Sitemap</h4>
            <NavBar position='footer' />
          </div>
          <div className='footer__contact'>
            <h4>Contact us</h4>
            <address>
              {contacts.map((contact, index) => (
                <a
                  className='footer__contact-info'
                  href={contact.path}
                  key={index}
                  target='_blank'
                  rel="noreferrer"
                >
                  {contact.icon} {contact.info}
                </a>
              ))}
            </address>
          </div>
          <div className='footer__contact'>
            <h4>Connect with us</h4>
            <SocialsLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}
