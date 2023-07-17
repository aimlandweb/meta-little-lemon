import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';


const Logo = () => {
	const navigate = useNavigate()
	return (
		<img
			src='/Logo.svg'
			alt='Little Lemon Logo'
			className={styles['nav-logo']}
			onClick={() => navigate('/')}
		/>
	);
};

export default Logo;
