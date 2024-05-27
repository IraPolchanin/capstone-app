import React, { useState } from 'react'
import { Button } from './Button';

export const BookingForm = ({ availableTimes,
  dispatchOnDateChange,
  submitData, }) => {
  const currentDate = new Date().toISOString().split("T")[0]
  const occasions = ["Birthday", "Anniversary", "Other"];

  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(availableTimes[0]);
  const [guestsNum, setGuestsNum] = useState(1);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsNumValid = guestsNum !== "";
  const isOccasionValid = occasion !== "";

  const errorMessage = {
    'date': "Please choose a valid date",
    'time': "Please choose a valid time",
    'occasion': "Please choose a valid occasion",
    'guests': "Please enter a number between 1 and 10",
  };

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    submitData({ date, time, guestsNum, occasion });
  }

  return (
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form-fieldset'>
          <label className="form-label" htmlFor="res-date">Choose date</label>
          <input
            className="form-field"
            aria-labelledby="select_date"
            type="date"
            name="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            min={currentDate}
            required
          />
          {!isDateValid && (
            <p
              className='form__error-message'
            // data-testId="error-message"
            >
              {errorMessage.date}
            </p>)}
        </fieldset>

        <fieldset className='form-fieldset'>
          <label className="form-label" htmlFor="res-time">Choose time</label>
          <select
            aria-labelledby="select_time"
            name="time"
            id="res-time"
            required
            value={time}
            onChange={e => setTime(e.target.value)}
          >
            <option value=''>Select a time</option>

            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            )
            )}
          </select>
          {!isTimeValid && (
            <p
              className='form__error-message'
            // data-testId="error-message"
            >
              {errorMessage.time}
            </p>
          )}
        </fieldset>

        <fieldset className='form-fieldset'>
          <label className="form-label" htmlFor="guests">Number of Guests</label>
          <input
            className="form-field"
            aria-labelledby="select_number_of_guests"
            type="number"
            name="guestsNum"
            id="guests"
            min={1}
            max={10}
            value={guestsNum}
            onChange={e => setGuestsNum(e.target.value)}
          />
          {!isGuestsNumValid && (
            <p
              className='form__error-message'
            // data-testId="error-message"
            >
              {errorMessage.guests}
            </p>
          )}
        </fieldset>

        <fieldset className='form-fieldset'>
          <label className="form-label" htmlFor="occasion">Occasion</label>
          <select
            aria-labelledby="select_occasion"
            name="occasion"
            id="occasion"
            key={occasion}
            required
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
          >
            <option value=''>Select an occasion</option>
            {occasions.map(occasion => (
              <option
                value={occasion}
                key={occasion}
              >
                {occasion}
              </option>
            ))}
          </select>
          {!isOccasionValid && (
            <p
              className='form__error-message'
            // data-testId="error-message"
            >
              {errorMessage.occasion}
            </p>
          )}
        </fieldset>
        <Button
          text='Make Your reservation'
          modifier='primary'
          type='submit'
          position='form'
          disable={!isDateValid || !isTimeValid || !guestsNum || !isOccasionValid}
        />
      </form>
  )
}
