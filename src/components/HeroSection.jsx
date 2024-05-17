import React from 'react'

export const HeroSection = () => {
  return (
    <section className='section hero'>
      <div className='wrapper'>
        <h1 className='hero__title'>Little Lemon</h1>
        <h2 className='hero__subtitle'>Chicago</h2>
        <p className='hero__description'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className='button button-primary'>Reserve a Table</button>
      </div>
    </section>
  )
}
