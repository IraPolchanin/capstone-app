import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { BookingPage } from '../pages/BookingPage'
import { ConfirmedBooking } from '../pages/ConfirmedBooking';
import { NotFound } from '../pages/NotFound';
import { ConfirmedSubscribing } from '../pages/ConfirmedSubscribing';

export const Main = () => {
  return (
    <main className="main" aria-label="Main content">
      <Routes>
        <Route path='/capstone-app'>
          <Route index element={<HomePage />} />
          <Route path='booking/*'>
            <Route index element={<BookingPage />} />
            <Route path='confirmedBooking' element={<ConfirmedBooking />} />
          </Route>
        </Route>
        <Route path='confirmedEmail' element={<ConfirmedSubscribing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};
