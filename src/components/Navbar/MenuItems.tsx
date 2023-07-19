import styles from './MenuItems.module.css';

interface MenuItemsProps {
	isOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isOpen }) => {
	return (
		<ul className={`${styles['navMenu']} ${isOpen ? styles.open : ''}`}>
			<li>
				<a href='/'>Home</a>
			</li>
			<li>
				<a href='#about'>About</a>
			</li>
			<li>
				<a href='/home'>Menu</a>
			</li>
			<li>
				<a href='/booking'>Reservations</a>
			</li>
			<li>
				<a href='/'>Order Online</a>
			</li>
			<li>
				<a href='/'>Login</a>
			</li>
		</ul>
	);
};

export default MenuItems;
