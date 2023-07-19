import styles from './About.module.css';

const About = () => {
	return (
		<section className={styles.about} id='#about'>
			<div className={styles.aboutInfo}>
				<h1
					className={styles.restaurantName}
					data-testid='about-restaurant-title'
				>
					Little Lemon
				</h1>
				<h3 className={styles.location} data-testid='about-restaurant-location'>
					Chicago
				</h3>
				<p className={styles.description}>
					Welcome to Little Lemon, Chicago's charming neighborhood bistro, a
					dream brought to life by two friends, Arian and Mario! Indulge in
					simple food and classic cocktails in our lively yet casual
					environment. Our locally sourced menu, complemented by daily specials,
					brings the flavors of our community to your table. Join Arian and
					Mario for a delightful dining experience filled with warmth, laughter,
					and the zest for life!
				</p>
			</div>
			<div className={styles.image}>
				<img src='/owners.jpg' alt='Restaurant Image' />
			</div>
		</section>
	);
};

export default About;
