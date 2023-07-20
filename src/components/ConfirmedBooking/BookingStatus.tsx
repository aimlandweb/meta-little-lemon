import { Link, useLocation } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './BookingStatus.module.css';

const BookingStatus = () => {
	const { state } = useLocation();
	return (
		<article className={styles.bookingStatus}>
			<h1>The table has been reserved successfully</h1>
			<h3>Your Booking Details:</h3>
			<p>
				Date: <span className={styles.bookingDetails}>{state?.date}</span>
			</p>
			<p>
				Time: <span className={styles.bookingDetails}>{state?.time}</span>
			</p>
			<p>
				No of Guests:{' '}
				<span className={styles.bookingDetails}>{state?.noOfGuests}</span>
			</p>
			<p>
				Occasion: <span className={styles.bookingDetails}>{state?.occasion}</span>
			</p>
			<p>
				<BsFillCheckCircleFill size={56} className={styles.success} />
			</p>
      <Link to="/" className={styles.linkToHome}>Home</Link>
		</article>
	);
};

export default BookingStatus;
