import styles from './Testimonial.module.css';
const Testimonial = () => {
	return <article className={styles.testimonial}>
		<p className={styles.rating}>4/5</p>
		<div className={styles.profile}>
			<img src="" alt="" className={styles.profilePicture}/>
			<p className={styles.userName}>John Doe</p>
		</div>
		<p className={styles.review}>Notes |Review</p>
	</article>;
};

export default Testimonial;