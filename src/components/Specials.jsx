import React from 'react';
import { Link } from 'react-router-dom';
import { meals } from '../data/meals';
import { SpecialsCard } from './SpecialsCard';
import { Button } from './Button';

export const Specials = () => {
  return (
    <section className='page__section specials' id="menu">
      <div className='wrapper'>
        <div className='specials__header'>
          <h3 className='specials__title'>This week specials!</h3>
          <Link className='specials__btn' to='orderOnline' role="button">
            <Button text='Online Menu' modifier='primary' />
          </Link>
        </div>
        <div className='specials__card-container'>
          {meals.map(meal => (
            <SpecialsCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  )
}
