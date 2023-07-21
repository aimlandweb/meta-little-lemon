/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from '../components/BookingPage/BookingForm/BookingForm';

it('renders the text "Book Now"', () => {
	render(
		<BookingForm
			date=''
			time=''
			noOfGuests={1}
			occasion='Birthday'
			onDateChange={() => {}}
			onTimeChange={() => {}}
			onNoOfGuestsChange={() => {}}
			onOccasionChange={() => {}}
			onSubmit={() => {}}
			availableTimes={[]}
		/>
	);

	const formHeading = screen.getByTestId('form-heading');
	expect(formHeading).toBeInTheDocument();
	expect(formHeading).toHaveTextContent('Book Now');
});

it('validates that the time input field has the "required" attribute', () => {
	render(
		<BookingForm
			date=''
			time=''
			noOfGuests={1}
			occasion='Birthday'
			onDateChange={() => {}}
			onTimeChange={() => {}}
			onNoOfGuestsChange={() => {}}
			onOccasionChange={() => {}}
			onSubmit={() => {}}
			availableTimes={[]}
		/>
	);

	const timeInput = screen.getByTestId('form-time');
	expect(timeInput).toHaveAttribute('min', '1');
});