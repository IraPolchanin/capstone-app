import React, { useEffect, useState } from 'react'
import { Button } from './Button';

export const BookingForm = ({ availableTimes,
  dispatchOnDateChange,
  submitData, }) => {
  const currentDate = new Date().toISOString().split("T")[0]
  const occasions = ["Birthday", "Anniversary", "Other"];

  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(availableTimes.length > 0 ? availableTimes[0] : '')
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

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    submitData({ date, time, guestsNum: Number(guestsNum), occasion });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form-fieldset'>
        <legend className="sr-only">Reservation Details</legend>
        <label className="form-label" htmlFor="res-date">Choose date</label>
        <input
          className="form-field"
          aria-describedby="select_date"
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
            id="date-error"
            className='form__error-message'
          >
            {errorMessage.date}
          </p>
        )}
        <div id="date-desc" className="sr-only">Select a date for your reservation.</div>

      </fieldset>

      <fieldset className='form-fieldset'>
        <legend className="sr-only">Time Selection</legend>
        <label className="form-label" htmlFor="res-time">Choose time</label>
        <select
          aria-describedby="select_time"
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
            id="time-error"
            className='form__error-message'
          >
            {errorMessage.time}
          </p>
        )}
        <div id="time-desc" className="sr-only">Select a time for your reservation.</div>

      </fieldset>

      <fieldset className='form-fieldset'>
        <legend className="sr-only">Guest Number</legend>
        <label className="form-label" htmlFor="res-guests">Number of Guests</label>
        <input
          className="form-field"
          aria-labelledby="select_number_of_guests"
          type="number"
          name="guestsNum"
          id="res-guests"
          min={1}
          max={10}
          value={guestsNum}
          onChange={e => setGuestsNum(e.target.value)}
        />
        <span id="select_number_of_guests" className="sr-only">Number of Guests</span>
        {!isGuestsNumValid && (
          <p
            id="guests-error"
            className='form__error-message'
          >
            {errorMessage.guests}
          </p>
        )}
        <div id="guests-desc" className="sr-only">Select the number of guests for your reservation. Minimum 1 and maximum 10.</div>
      </fieldset>

      <fieldset className='form-fieldset'>
        <legend className="sr-only">Occasion Selection</legend>
        <label className="form-label" htmlFor="occasion">Occasion</label>
        <select
          aria-describedby="select_occasion"
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
            id="occasion-error"
            className='form__error-message'
          >
            {errorMessage.occasion}
          </p>
        )}
        <div id="occasion-desc" className="sr-only">Select the occasion for your reservation.</div>
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
