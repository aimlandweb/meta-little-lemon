import { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from './Logo';
import MenuItems from './MenuItems';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className={styles.navbar}>
			<Logo />
			<GiHamburgerMenu className={styles.hamburger} onClick={toggleMenu}/>
			<MenuItems isOpen={isOpen}/>
		</header>
	);
};

export default Navbar;
