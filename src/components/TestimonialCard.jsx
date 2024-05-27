import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const TestimonialCard = ({ customer }) => {
  return (
    <article className="customersSay__card testimonialCard">
      <div className="testimonialCard__img-container">
        <img className="testimonialCard__img" src={customer.image} alt={customer.fullName} />
      </div>
      <p className="testimonialCard__name">{customer.name}</p>
      <p className="testimonialCard__rating">
        {customer.rating.map((ratingPoint, index) =>
          ratingPoint === 1 ? (
            <FaStar key={index} />
          ) : ratingPoint === 0.5 ? (
            <FaStarHalfAlt key={index} />
          ) : ratingPoint === 0 ? (
            <FaRegStar key={index} />
          ) : null
        )}
        <span>
          {customer.rating.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )} / {customer.rating.length}
        </span>
      </p>
      <blockquote className="testimonialCard__quote">
       "{customer.quote}"
      </blockquote>
    </article>
  );
};
