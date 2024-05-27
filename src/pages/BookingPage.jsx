import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { BookingForm } from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/mockAPI';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

export const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("confirmedBooking");
    };
  };

  return (
    <section className='page__section'>
      <div className='wrapper'>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </div>
    </section>
  );
};
