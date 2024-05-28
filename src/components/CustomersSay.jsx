import React from 'react';
import { TestimonialCard } from './TestimonialCard'
import { customers } from '../data/customers'

export const CustomersSay = () => {
  return (
    <section 
    className='page__section customersSay'
    aria-labelledby="customers-say-title" 
    aria-describedby="customers-say-description"
    >
      <div className='wrapper'>
        <h4 className='customersSay__title' id="customers-say-title">Our customers say</h4>
        <p id="customers-say-description" className="sr-only">Read what our customers have to say about their experiences.</p>
        <div className='customersSay__card-container'>
          {customers.map(customer => (
            <TestimonialCard customer={customer} key={customer.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
