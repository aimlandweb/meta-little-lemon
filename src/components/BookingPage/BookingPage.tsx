import { useState, ChangeEvent, FormEvent, useReducer } from 'react';
import BookingForm, { FormData } from './BookingForm/BookingForm';
import BookingSlot from './BookingSlot/BookingSlot';
import styles from './BookingPage.module.css';

export interface Submission extends FormData {
	date: string;
	time: string;
	noOfGuests: number;
	occasion: string;
}

interface SubmissionAction {
	type: 'SUBMIT_FORM';
	payload: Submission[];
}

const submissionReducer = (
	state: Submission[],
	action: SubmissionAction
): Submission[] => {
	switch (action.type) {
		case 'SUBMIT_FORM':
			return [...state, ...action.payload];
		default:
			return state;
	}
};

const BookingPage: React.FC = () => {
	const [date, setDate] = useState<string>(
		new Date().toISOString().split('T')[0]
	);
	const [noOfGuests, setNoOfGuests] = useState<number>(1);
	const [occasion, setOccasion] = useState<string>('Birthday');
	const [time, setTime] = useState<string>('17:00');
	const [availableTimes, dispatchTimes] = useReducer(submissionReducer, []);

	const defaultSlots = [
		'',
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
	];

	const bookedSlotsForDate = availableTimes
		.filter((slot) => slot.date === date)
		.map((slot) => slot.time);

	const availableSlots = defaultSlots
		.slice(1)
		.filter((slot) => !bookedSlotsForDate.includes(slot));

	const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value);
	};

	const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTime(e.target.value);
	};

	const handleNoOfGuestsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNoOfGuests(parseInt(e.target.value));
	};

	const handleOccasionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setOccasion(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatchTimes({
			type: 'SUBMIT_FORM',
			payload: [
				{
					date,
					time,
					noOfGuests,
					occasion,
				},
			],
		});
		setTime('');
		setNoOfGuests(1);
		setOccasion('Birthday');
	};

	return (
		<section className={styles.bookingPage}>
			<BookingForm
				date={date}
				time={time}
				noOfGuests={noOfGuests}
				occasion={occasion}
				onDateChange={handleDateChange}
				onTimeChange={handleTimeChange}
				onNoOfGuestsChange={handleNoOfGuestsChange}
				onOccasionChange={handleOccasionChange}
				onSubmit={handleSubmit}
				availableTimes={availableTimes}
				aria-label='Booking Form'
				aria-labelledby='booking-form-header'
			/>

			<div className={styles.bookingSlotsContainer}>
				<h2>Booked Slots</h2>
				<div className={styles.bookedSlots}>
					{availableTimes.length > 0 ? (
						availableTimes.map((slot) => {
							return (
								<BookingSlot
									key={`${slot.date}-${slot.time}`}
									date={slot.date}
									time={slot.time}
								/>
							);
						})
					) : (
						<p className={styles.noBooking}>No Booking Found!</p>
					)}
				</div>
				<h2>
					{`Available Slots For `}
					<span className={styles.highlightDate}>{`${date}`}</span>
				</h2>
				<div className={styles.availableSlots}>
					{availableSlots.length > 0 ? (
						availableSlots.map((slot) => {
							return (
								<BookingSlot key={`${date}-${slot}`} date={date} time={slot} />
							);
						})
					) : (
						<p className={styles.noSlots}>No Slots available for {`${date}`}</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default BookingPage;
