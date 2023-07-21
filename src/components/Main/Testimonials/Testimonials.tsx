import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';
import { testimonies } from '../../../constants';

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<h1 className={styles.heading}>Testimonials</h1>
			<div className={styles.userRatings}>
				<Testimonial
					src='/raterOne.jpg'
					testimony={testimonies[0]}
					name='Emily Davis'
					rating='4/5'
				/>
				<Testimonial
					src='/raterTwo.jpg'
					testimony={testimonies[1]}
					name='Michael Johnson'
					rating='4.5/5'
				/>
				<Testimonial
					src='/raterThree.jpg'
					testimony={testimonies[2]}
					name='Benjamin Smith'
					rating='4/5'
				/>
				<Testimonial
					src='/raterFour.jpg'
					testimony={testimonies[3]}
					name='Christopher Anderson'
					rating='4.2/5'
				/>
			</div>
		</section>
	);
};

export default Testimonials;
