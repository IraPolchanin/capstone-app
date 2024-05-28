import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const TestimonialCard = ({ customer }) => {
  const averageRating = customer.rating.reduce((acc, current) => acc + current, 0);
  const maxRating = customer.rating.length;
  return (
    <article
      className="customersSay__card testimonialCard"
      aria-labelledby={`testimonial-${customer.id}-name`}
      aria-describedby={`testimonial-${customer.id}-quote`}
    >
      <div className="testimonialCard__img-container">
        <img className="testimonialCard__img" src={customer.image} alt={customer.name} />
      </div>
      <p className="testimonialCard__name" id={`testimonial-${customer.id}-name`}>{customer.name}</p>
      <p className="testimonialCard__rating" aria-label={`Rating: ${averageRating} out of ${maxRating} stars`}>
        {customer.rating.map((ratingPoint, index) =>
          ratingPoint === 1 ? (
            <FaStar key={index} aria-label="Full star" />
          ) : ratingPoint === 0.5 ? (
            <FaStarHalfAlt key={index} aria-label="Half star"/>
          ) : ratingPoint === 0 ? (
            <FaRegStar key={index} aria-label="Empty star"/>
          ) : null
        )}
        <span>
          {averageRating} / {maxRating}
        </span>
      </p>
      <blockquote className="testimonialCard__quote" id={`testimonial-${customer.id}-quote`}>
        "{customer.quote}"
      </blockquote>
    </article>
  );
};
