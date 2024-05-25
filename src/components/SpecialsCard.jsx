import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { LuBike } from "react-icons/lu";

export const SpecialsCard = ({ meal }) => {
  return (
    <article className="specials__card card">
      <div className="card__image-container">
        <img className="card__image" src={meal.image} alt={meal.title} />
      </div>
      <div className="card__content">
        <div className="card__header">
          <h4>{meal.title}</h4>
          <span>${meal.price}</span>
        </div>
        <p className="card__description">{meal.description}</p>
        <HashLink to="orderOnline" className='card__btn'>
          <span>Order a delivery</span> <LuBike />
        </HashLink>
      </div>
    </article>
  )
}

