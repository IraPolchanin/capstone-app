import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { BookingPage } from '../pages/BookingPage'
import { ConfirmedBooking } from './ConfirmedBooking';

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='booking' element={<BookingPage />} />
        <Route path='confirmed' element={<ConfirmedBooking />} />
        <Route path='*' element={<p>Page not found</p>} />
      </Routes>
    </main>
  );
};
