import React from 'react';
import chefsMarioAndAdrian1 from "../assets/imiges/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2 from "../assets/imiges/chefs-mario-and-adrian_2.jpg";

export const About = () => {
  return (
    <section className='page__section about' id="about">
      <div className='wrapper'>
        <div className='about__content'>
          <div className="about__text-container">
            <h2 className='about__title'>Our Story</h2>
            <p className='about__text'>
              In 1998, amidst the vibrant streets of Chicago, Little Lemon Restaurant sprouted, blending Mediterranean flavors with family traditions. Inspired by a grandmother's secret recipes, our journey began with a pinch of nostalgia and a dash of ambition. From our humble kitchen experiments to bustling dining rooms filled with laughter, each dish tells a story of love and heritage. Little Lemon became a sanctuary where every bite evokes cherished memories and culinary adventures await.
            </p>
          </div>
          <div className="about__img-container">
            <img className="about__img" src={chefsMarioAndAdrian1} alt="Chefs Mario and Adrian #1" />
            <img className="about__img" src={chefsMarioAndAdrian2} alt="Chefs Mario and Adrian #2" />
          </div>
        </div>
      </div>
    </section >
  );
};
