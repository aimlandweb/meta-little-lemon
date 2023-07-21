import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className='welcome'>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<Link to='/booking' type='button' className='btn'>
					Reserve a table
				</Link>
			</div>
			<div className='welcome-image'>
				<img src='' alt='' />
			</div>
		</div>
	);
};

export default Hero;
