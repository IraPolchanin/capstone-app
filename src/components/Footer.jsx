import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavBar } from './NavBar';
import { SocialsLinks } from './SocialsLinks';
import { contacts } from '../data/contacts';
import logoImg from '../assets/imiges/logo-white.png';

export const Footer = () => {
  return (
    <footer className='footer' aria-labelledby="footer-heading">
      <div className='wrapper'>
        <div className='footer__content'>
          <HashLink to='#header' className='footer__logo-container' aria-label="Back to top">
            <img className='footer__logo' src={logoImg} alt="Logo" />
          </HashLink>
          <div className='footer__nav'>
            <h6 className='footer__title' id="footer-heading">Sitemap</h6>
            <NavBar position='footer' />
          </div>
          <div className='footer__contact'>
            <h6 className='footer__title'>Contact us</h6>
            <address>
              {contacts.map((contact, index) => (
                <a
                  className='footer__contact-info'
                  href={contact.path}
                  key={index}
                  target='_blank'
                  rel="noreferrer"
                  aria-label={contact.label}
                >
                  {contact.icon} {contact.info}
                </a>
              ))}
            </address>
          </div>
          <div className='footer__contact'>
            <h6 className='footer__title'>Connect with us</h6>
            <SocialsLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}
