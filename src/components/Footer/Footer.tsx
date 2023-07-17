import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img src='/restaurant.jpg' alt='Restaurant' />
			<nav className={styles.footerNav}>
				<ul className={styles.footerNavLinks}>
					<li>Doormat Navigation</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Menu</a>
					</li>
					<li>
						<a href=''>Reservations</a>
					</li>
					<li>
						<a href=''>Order Online</a>
					</li>
					<li>
						<a href=''>Login</a>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Contact</li>
					<li>
						<a href=''>Phone No</a>
					</li>
					<li>
						<a href=''>Email</a>
					</li>
				</ul>
				<ul className={styles.footerNavLinks}>
					<li>Socials</li>
					<li>
						<a href=''>Facebook</a>
					</li>
					<li>
						<a href=''>Twitter</a>
					</li>
					<li>
						<a href=''>Instagram</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
