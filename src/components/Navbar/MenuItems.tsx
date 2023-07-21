import { Link } from 'react-router-dom';
import styles from './MenuItems.module.css';

interface MenuItemsProps {
	isOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isOpen }) => {
	return (
		<ul className={`${styles['navMenu']} ${isOpen ? styles.open : ''}`}>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='#about'>About</Link>
			</li>
			<li>
				<Link to='/home'>Menu</Link>
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
	);
};

export default MenuItems;
