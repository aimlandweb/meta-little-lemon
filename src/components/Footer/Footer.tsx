import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img src='/restaurant.jpg' alt='Restaurant' />
			<nav className={styles.footerNav}>
				<ul className={styles.footerNavLinks}>
					<li>Doormat Navigation</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='#about'>About</Link>
					</li>
					<li>
						<Link to='#menu'>Menu</Link>
					</li>
					<li>
						<Link to='/booking'>Reservations</Link>
					</li>
					<li>
						<Link to='/'>Order Online</Link>
					</li>
					<li>
						<Link to='/'>Login</Link>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Contact</li>
					<li>
						<Link to='+1 568-475-0471'>Phone No</Link>
					</li>
					<li>
						<Link to='online@littlelemon.com'>Email</Link>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Socials</li>
					<li>
						<a href='https://www.facebook.com/littlelemon'>Facebook</a>
					</li>
					<li>
						<a href='https://www.twitter.com/littlelemon'>Twitter</a>
					</li>
					<li>
						<a href='https://www.instagram.com/littlelemon'>Instagram</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
