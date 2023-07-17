import {MdDeliveryDining} from 'react-icons/md'
import styles from './MenuItem.module.css';

const MenuItem = () => {
	return (
		<article className={styles.menuItem}>
			<div className={styles.itemImage}>
				<img src='/greekSalad.jpg' alt='Greek Salad' />
			</div>
			<div className={styles.itemContent}>
				<div className={styles.itemHeader}>
					<p className={styles.itemTitle}>Greek Salad</p>
					<p className={styles.itemPrice}>$ 12.99</p>
				</div>
				<p className={styles.itemDescription}>
					The famous greek salad of crispy lettuce, peppers, olives and our
					Chicago style feta cheese, garnished with crunchy garlic and rosemary
					croutons.
				</p>
				<div className={styles.itemFooter}>
					<p className={styles.itemDelivery}>
						<a href='/'>Order a delivery</a>
					</p>
					<p className={styles.itemDeliveryIcon}>
						<MdDeliveryDining />
					</p>
				</div>
			</div>
		</article>
	);
};

export default MenuItem;
