import React, { useReducer } from 'react'
import { BookingForm } from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/mockAPI';
import { Navigate } from 'react-router-dom';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

export const BookingPage = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      <Navigate to="/confirmed" />
    };
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchOnDateChange={dispatchOnDateChange}
      submitData={submitData}
    />
  );
};
