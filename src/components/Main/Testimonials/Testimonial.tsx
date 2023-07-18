import styles from './Testimonial.module.css';

interface TestimonialProps {
	src: string;
	testimony: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ src, testimony }) => {
	return (
		<article className={styles.testimonial}>
			<p className={styles.rating}>Rating : 4/5</p>
			<div className={styles.profile}>
				<img src={src} alt='' className={styles.profilePicture} />
				<p className={styles.userName}>John Doe</p>
			</div>
			<p className={styles.review}>{testimony}</p>
		</article>
	);
};

export default Testimonial;
