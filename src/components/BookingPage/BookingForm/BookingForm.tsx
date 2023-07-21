import { ChangeEvent, FormEvent } from 'react';
import styles from './BookingForm.module.css';
import AvailableTimes from '../AvailableTimes/AvailableTimes';
import { Submission } from '../BookingPage';

export interface FormData {
	date: string;
	time: string;
	noOfGuests: number;
	occasion: string;
}

interface BookingFormProps extends FormData {
	onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onTimeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	onNoOfGuestsChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onOccasionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	onSubmit: (e: FormEvent) => void;
	availableTimes: Submission[];
}

const BookingForm: React.FC<BookingFormProps> = (props) => {
	const {
		date,
		time,
		noOfGuests,
		occasion,
		onDateChange,
		onTimeChange,
		onNoOfGuestsChange,
		onOccasionChange,
		onSubmit,
		availableTimes,
	} = props;

	return (
		<div className={styles.bookingForm}>
			<h1 className={styles.heading} data-testid='form-heading'>
				Book Now
			</h1>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.formField}>
					<label htmlFor='res-date' className={styles.label}>
						Choose date :
					</label>
					<input
						type='date'
						id='res-date'
						className={styles.input}
						value={date}
						required
						onChange={onDateChange}
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor='res-time' className={styles.label}>
						Choose time :
					</label>
					<AvailableTimes
						date={date}
						time={time}
						onTimeChange={onTimeChange}
						availableTimes={availableTimes}
					/>
					{!time && (
						<span className={styles.timeSlotNotSelected}>
							Please select time slot
						</span>
					)}
				</div>
				<div className={styles.formField}>
					<label htmlFor='guests' className={styles.label}>
						Number of guests :
					</label>
					<input
						type='number'
						placeholder='1'
						min='1'
						max='10'
						id='guests'
						className={styles.input}
						value={noOfGuests}
						onChange={onNoOfGuestsChange}
						aria-label='Number of Guests'
						data-testid='form-time'
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor='occasion' className={styles.label}>
						Occasion :
					</label>
					<select
						id='occasion'
						className={styles.select}
						value={occasion}
						onChange={onOccasionChange}
						required
					>
						<option value='Birthday'>Birthday</option>
						<option value='Anniversary'>Anniversary</option>
					</select>
				</div>

				<input
					type='submit'
					value='Make Your reservation'
					className={styles.button}
					disabled={time === ''}
				/>
			</form>
		</div>
	);
};

export default BookingForm;
