import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<div className={styles.heading}></div>
			<div className={styles.userRatings}>
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</div>
		</section>
	);
};

export default Testimonials;