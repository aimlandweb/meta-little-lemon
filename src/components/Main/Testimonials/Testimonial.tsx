import styles from './Testimonial.module.css';

interface TestimonialProps {
	src: string;
	testimony: string;
	rating:string;
	name:string;
}

const Testimonial: React.FC<TestimonialProps> = ({ src, testimony,rating,name }) => {
	return (
		<article className={styles.testimonial}>
			<p className={styles.rating}>Rating : {rating}</p>
			<div className={styles.profile}>
				<img src={src} alt='' className={styles.profilePicture} />
				<p className={styles.userName}>{name}</p>
			</div>
			<p className={styles.review}>{testimony}</p>
		</article>
	);
};

export default Testimonial;
