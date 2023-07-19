import  { ChangeEvent } from 'react';
import { Submission } from '../BookingPage';
import styles from './AvailableTimes.module.css';

interface AvailableTimesProps {
	date: string;
	time: string;
	onTimeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	availableTimes: Submission[];
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
	date,
	time,
	onTimeChange,
	availableTimes,
}) => {
	const defaultSlots = ['','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

	const bookedSlotsForDate = availableTimes
		.filter((slot) => slot.date === date)
		.map((slot) => slot.time);

	const remainingSlots = defaultSlots.filter(
		(slot) => !bookedSlotsForDate.includes(slot)
	);


	return (
		<select
			id='res-time'
			title='AvailableTime'
			className={styles.select}
			value={time}
			onChange={onTimeChange}
			required
		>
			{remainingSlots.map((slot) => (
				<option key={slot}>{slot}</option>
			))}
		</select>
	);
};

export default AvailableTimes;
