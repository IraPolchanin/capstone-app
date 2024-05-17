import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import './main.scss';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='booking' element={<BookingPage />} />
          <Route path='*' element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
