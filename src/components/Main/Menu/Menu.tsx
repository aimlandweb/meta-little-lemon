import MenuItem from './MenuItem';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.menuHeader}>
				<h1>This weeks specials!</h1>
				<a href='/menu' type='button'>
					Online Menu
				</a>
			</div>
			<div className={styles.menuItems}>
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</div>
		</div>
	);
};

export default Menu;
