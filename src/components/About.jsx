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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
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
