import styles from './BookingSlot.module.css';

interface BookingSlotProps {
	date: string;
	time: string;
}

const BookingSlot: React.FC<BookingSlotProps> = ({ date, time }) => {
	return (
		<div className={styles.bookingSlot}>
			<p>{`${date} - ${time}`}</p>
		</div>
	);
};

export default BookingSlot;
