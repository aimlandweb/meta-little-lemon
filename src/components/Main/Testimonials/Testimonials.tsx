import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';
import { testimonies } from '../../../constants';

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<h1 className={styles.heading}>Testimonials</h1>
			<div className={styles.userRatings}>
				<Testimonial src='/raterOne.jpeg' testimony={testimonies[0]} />
				<Testimonial src='/raterTwo.jpeg' testimony={testimonies[1]} />
				<Testimonial src='/raterThree.jpeg' testimony={testimonies[2]} />
				<Testimonial src='/raterFour.jpeg' testimony={testimonies[3]} />
			</div>
		</section>
	);
};

export default Testimonials;
