import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import banner from '../assets/imiges/banner.jpg'

export const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='wrapper'>
        <div className='hero__content'>
          <div className='hero__content-text'>
            <h1 className='hero__title'>Little Lemon</h1>
            <p className='hero__subtitle'>Chicago</p>
            <p className='hero__description'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='booking' role="button">
              <Button text='Reserve Table' modifier='primary' />
            </Link>
          </div>
          <div className='hero__img-container'>
            <img className='hero__img' src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
