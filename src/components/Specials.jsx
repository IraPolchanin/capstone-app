import React from 'react';
import { meals } from '../data/meals'
import { SpecialsCard } from './SpecialsCard';
console.log(meals)

export const Specials = () => {
  return (
    <section className='page__section specials' id='menu'>
      <div className='wrapper'>
        <h2 className='specials__title'>This week specials!</h2>
        <div className='specials__card-container'>
          {meals.map(meal => (
            <SpecialsCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  )
}
