import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.menuHeader}>
				<h1>This weeks specials!</h1>
				<Link to='/menu' type='button'>
					Online Menu
				</Link>
			</div>
			<div className={styles.menuItems}>
				<MenuItem
					description='The famous greek salad of crispy lettuce, peppers, olives and our
					Chicago style feta cheese, garnished with crunchy garlic and rosemary
					croutons.'
					title='Greek Salad'
					price='12.99'
					imgURL='greekSalad.jpg'
				/>
				<MenuItem
					description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
					title='Bruchetta'
					price='5.99'
					imgURL='bruschetta.jpg'
				/>
				<MenuItem
					description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
					title='Lemon Dessert'
					price='5.00'
					imgURL='lemonDessert.jpg'
				/>
			</div>
		</div>
	);
};

export default Menu;
