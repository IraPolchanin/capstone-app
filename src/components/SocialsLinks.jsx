import React from 'react';
import facebookIco from '../assets/icons/facebook.svg';
import instagramIco from '../assets/icons/instagram.svg';
import twitterIco from '../assets/icons/x-twitter.svg';

export const SocialsLinks = () => {
  return (
    <div className='socialsLinks' aria-label="Social Links">
      <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img className='icon social__img' src={facebookIco} alt='Facebook Icon' />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img className='icon social__img' src={instagramIco} alt='Instagram Icon' />
      </a>
      <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="X-Twitter">
        <img className='icon social__img' src={twitterIco} alt='X-Twitter Icon' />
      </a>
    </div>
  )
}
