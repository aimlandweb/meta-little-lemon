import BookingStatus from './BookingStatus';
import styles from './ConfirmedBooking.module.css';

const ConfirmedBooking = () => {
	return <section className={styles.confirmedBooking}>
      <BookingStatus />
  </section>;
};

export default ConfirmedBooking;
