import React from 'react';
import { TestimonialCard } from './TestimonialCard'
import { customers } from '../data/customers'

export const CustomersSay = () => {
  return (
    <section className='page__section customersSay'>
      <div className='wrapper'>
        <h4 className='customersSay__title'>Our customers say</h4>
        <div className='customersSay__card-container'>
          {customers.map(customer => (
            <TestimonialCard customer={customer} key={customer.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
