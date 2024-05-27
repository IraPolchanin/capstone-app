import React from 'react';
import { Link } from 'react-router-dom';
import { LuBike } from "react-icons/lu";

export const SpecialsCard = ({ meal }) => {
  return (
    <article className="specials__card card">
      <div className="card__image-container">
        <img className="card__image" src={meal.image} alt={meal.title} />
      </div>
      <div className="card__content">
        <div className="card__header">
          <h5>{meal.title}</h5>
          <span>${meal.price}</span>
        </div>
        <p className="card__description">{meal.description}</p>
        <Link to="orderOnline" className='card__btn'>
          <span>Order a delivery</span> <LuBike />
        </Link>
      </div>
    </article>
  )
}

