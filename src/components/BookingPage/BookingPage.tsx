import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm, { FormData } from './BookingForm/BookingForm';
import BookingSlot from './BookingSlot/BookingSlot';
import * as API from '../../api';
import styles from './BookingPage.module.css';

export interface Submission extends FormData {
	id: string;
	date: string;
	time: string;
	noOfGuests: number;
	occasion: string;
}

const BookingPage: React.FC = () => {
	const navigate = useNavigate();
	const [date, setDate] = useState<string>(
		new Date().toISOString().split('T')[0]
	);
	const [noOfGuests, setNoOfGuests] = useState<number>(1);
	const [occasion, setOccasion] = useState<string>('Birthday');
	const [time, setTime] = useState<string>('17:00');
	const [availableTimes, setAvailableTimes] = useState<Submission[]>([]);
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

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const payload = {
			date,
			time,
			noOfGuests,
			occasion,
		};
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		};

		try {
			const data: Submission | null = await API.submitAPI(options); // Use the submitAPI method to submit data to the server
			if (data) {
				setAvailableTimes((prev) => [...prev, data]);
			}
			setTime('');
			setNoOfGuests(1);
			setOccasion('Birthday');
			navigate('/confirmed', { state: payload });
		} catch (error) {
			console.error('Error:', error);
		}
		// const response = await fetch(
		// 	'http://localhost:5500/api/submitAPI',
		// 	options
		// );
		// if (!response.ok) {
		// 	throw new Error('Network response was not ok');
		// }
		// const data: Submission = await response.json();

		// setAvailableTimes((prev) => [...prev, data]);

		// setTime('');
		// setNoOfGuests(1);
		// setOccasion('Birthday');
		// navigate('/confirmed',{state:payload})
	};

	useEffect(() => {
		(async () => {
			// try {
			// 	const response = await fetch('http://localhost:5500/api/fetchAPI');
			// 	if (!response.ok) {
			// 		throw new Error('Network response was not ok');
			// 	}
			// 	const data: Submission[] = await response.json();
			// 	setAvailableTimes(data);
			// } catch (error) {
			// 	console.error('Error:', error);
			// }
			try {
				const data: Submission[] = await API.fetchAPI(); // Use the fetchAPI method to fetch data from the server
				setAvailableTimes(data);
			} catch (error) {
				console.error('Error:', error);
			}
		})();
	}, [date, time, noOfGuests, occasion]);

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
				<h2>Booked Slots</h2>
				<div className={styles.bookedSlots}>
					{availableTimes.length > 0 ? (
						availableTimes.map((slot) => {
							return (
								<BookingSlot
									key={`${slot.id}`}
									date={slot.date}
									time={slot.time}
								/>
							);
						})
					) : (
						<p className={styles.noBooking}>No Booking Found!</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default BookingPage;
