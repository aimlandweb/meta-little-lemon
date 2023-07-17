import styles from './MenuItems.module.css';

interface MenuItemsProps {
	isOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isOpen }) => {
	return (
		<ul className={`${styles['navMenu']} ${isOpen ? styles.open : ''}`}>
			<li>
				<a href='/home'>Home</a>
			</li>
			<li>
				<a href='/home'>About</a>
			</li>
			<li>
				<a href='/home'>Menu</a>
			</li>
			<li>
				<a href='/home'>Reservations</a>
			</li>
			<li>
				<a href='/home'>Order Online</a>
			</li>
			<li>
				<a href='/home'>Login</a>
			</li>
		</ul>
	);
};

export default MenuItems;
