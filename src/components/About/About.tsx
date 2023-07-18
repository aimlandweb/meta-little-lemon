import styles from './About.module.css';

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.aboutInfo}>
				<h1 className={styles.restaurantName}>Little Lemon</h1>
				<h3 className={styles.location}>Chicago</h3>
				<p className={styles.description}>Lorem Ipsum ....</p>
			</div>
			<div className={styles.image}>
				<img src='' alt='Restaurant Image' />
			</div>
		</section>
	);
};

export default About;