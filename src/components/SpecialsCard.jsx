import React from 'react';
import { Link } from 'react-router-dom';
import { LuBike } from "react-icons/lu";

export const SpecialsCard = ({ meal }) => {
  return (
    <article className="specials__card card" aria-labelledby={`meal-title-${meal.id}`}>
      <div className="card__image-container">
        <img className="card__image" src={meal.image} alt={meal.title} />
      </div>
      <div className="card__content">
        <div className="card__header">
          <h5 id={`meal-title-${meal.id}`}>{meal.title}</h5>
          <span>${meal.price}</span>
        </div>
        <p className="card__description">{meal.description}</p>
        <Link
          to="orderOnline"
          className='card__btn'
          aria-label={`Order ${meal.title} for delivery`}
        >
          <span>Order a delivery</span> <LuBike />
        </Link>
      </div>
    </article>
  );
};
