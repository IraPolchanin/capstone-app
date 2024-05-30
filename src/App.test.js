import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookingForm } from './components/BookingForm';
import { BookingPage } from './pages/BookingPage';
import { fetchAPI, submitAPI } from './utils/mockAPI';

jest.mock('./utils/mockAPI', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const availableTimes = ['18:00', '19:00'];
const dispatchOnDateChange = jest.fn();
const submitData = jest.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />);
  });

  test('renders static text', () => {
    const staticTextElement = screen.getByLabelText('Choose date');
    expect(staticTextElement).toBeInTheDocument();
  });

  test('renders date input with correct attributes', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min');
    expect(dateInput).toHaveValue(new Date().toISOString().split("T")[0]);
  });

  test('renders time select with correct attributes', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('name', 'time');
    expect(timeSelect).toHaveValue(availableTimes[0]);

    const options = Array.from(timeSelect.options).map(option => option.value);
    expect(options).toEqual(['', ...availableTimes]);
  });

  test('renders number of guests input with correct attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveValue(1);
  });

  test('renders occasion select with correct attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('name', 'occasion');
    expect(occasionSelect).toHaveValue('Birthday');

    const options = Array.from(occasionSelect.options).map(option => option.value);
    expect(options).toEqual(['', 'Birthday', 'Anniversary', 'Other']);
  });

  test('renders error message when date input is invalid', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    expect(screen.getByText(/please choose a valid date/i)).toBeInTheDocument();
  });

  test('renders error message when time select is invalid', () => {
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
    expect(screen.getByText(/please choose a valid time/i)).toBeInTheDocument();
  });

  test('renders error message when number of guests input is invalid', () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '' } });
    expect(screen.queryByText(/please enter a number between 1 and 10/i)).toBeInTheDocument();
  });

  test('renders error message when occasion select is invalid', () => {
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });
    expect(screen.getByText(/please choose a valid occasion/i)).toBeInTheDocument();
  });
});

describe('BookingPage', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    submitAPI.mockClear();
  });

  test('renders the BookingForm with initial available times', () => {
    fetchAPI.mockReturnValue(['18:00', '19:00']);

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    const timeSelect = screen.getByLabelText(/choose time/i);
    const options = Array.from(timeSelect.options).map(option => option.value);
    expect(options).toEqual(['', '18:00', '19:00']);
  });

  test('updates available times on date change', async () => {
    const initialTimes = ['18:00', '19:00'];
    const updatedTimes = ['20:00', '21:00'];

    fetchAPI.mockReturnValueOnce(initialTimes).mockReturnValueOnce(updatedTimes);

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-06-06' } });

    await waitFor(() => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      const options = Array.from(timeSelect.options).map(option => option.value);
      expect(options).toEqual(['', '20:00', '21:00']);
    });
  });

  test('submits the form with correct data and navigates', async () => {
    fetchAPI.mockReturnValue(['18:00', '19:00']);
    submitAPI.mockReturnValue(true);

    const navigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => navigate);

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-06-06' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith({
        date: '2024-06-06',
        time: '19:00',
        guestsNum: 5,
        occasion: 'Birthday',
      });
      expect(navigate).toHaveBeenCalledWith('confirmedBooking');
    });
  });
});