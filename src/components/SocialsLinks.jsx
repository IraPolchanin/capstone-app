import React from 'react';
import facebookIco from '../assets/icons/facebook.svg';
import instagramIco from '../assets/icons/instagram.svg';
import twitterIco from '../assets/icons/x-twitter.svg';

export const SocialsLinks = () => {
  return (
    <div className='socialsLinks'>
      <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img className='icon social__img' src={facebookIco} alt='facebook-icon' />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img className='icon social__img' src={instagramIco} alt='instagram-icon' />
      </a>
      <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
        <img className='icon social__img' src={twitterIco} alt='x-twitter-icon' />
      </a>
    </div>
  )
}
