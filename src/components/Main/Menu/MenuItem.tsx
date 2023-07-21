import {MdDeliveryDining} from 'react-icons/md'
import styles from './MenuItem.module.css';
import { Link } from 'react-router-dom';

interface MenuItemProps {
	description: string;
	title: string;
	price: string;
	imgURL:string;
}

const MenuItem:React.FC<MenuItemProps> = ({description,title,price,imgURL}) => {
	return (
		<article className={styles.menuItem}>
			<div className={styles.itemImage}>
				<img src={`/${imgURL}`} alt='Greek Salad' />
			</div>
			<div className={styles.itemContent}>
				<div className={styles.itemHeader}>
					<p className={styles.itemTitle}>{title}</p>
					<p className={styles.itemPrice}>{`$ ${price}`}</p>
				</div>
				<p className={styles.itemDescription}>{description}</p>
				<div className={styles.itemFooter}>
					<p className={styles.itemDelivery}>
						<Link to='/'>Order a delivery</Link>
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
