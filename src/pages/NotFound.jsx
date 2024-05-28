import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SocialsLinks } from '../components/SocialsLinks';
import { Button } from '../components/Button';

export const NotFound = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (userEmail.trim()) {
      navigate("confirmedEmail");
    }
  }

  return (
    <section className='page__section notFound' aria-labelledby="coming-soon-heading">
      <div className='wrapper'>
        <h2 className='notFound__title' id="coming-soon-heading">Coming Soon!</h2>
        <p className='notFound__text'>Our website is currently undergoing exciting updates to serve you better. Stay tuned for a fresh new look, improved navigation, and exclusive online features. We can't wait to share it with you!</p>
        <div className='notFound__socials' aria-label="Social Links">
          <h4 className='notFound__subtitle' id="social-media-heading">Follow us on social media for the latest updates:</h4>
          <SocialsLinks />
        </div>
        <div className="notFound__subscribe">
          <h4 className='notFound__subtitle' id="newsletter-heading">Be the first to know! <span className='notFound__text'>Subscribe to our newsletter to receive early access to new features and special promotions.</span></h4>
          <form className='form notFound__form' onSubmit={handleSubmit} aria-labelledby="newsletter-heading">
            <label htmlFor="email-input" className="sr-only">Enter your email</label>
            <input
              id="email-input"
              className="form-field"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              required
              aria-required="true"
            />
            <Button
              text='Subscribe to newsletter'
              modifier='primary'
              type='submit'
              position='form'
              disable={!userEmail.trim()}
            />
          </form>
        </div>
      </div>
    </section>
  )
}
