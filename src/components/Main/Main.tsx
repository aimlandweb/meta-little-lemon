import About from '../About/About';
import Hero from './Hero';
import Menu from './Menu/Menu';
import Testimonials from './Testimonials/Testimonials';

const Main = () => {
	return (
		<main>
			<Hero />
			<Menu />
			<Testimonials/>
			<About/>
		</main>
	);
};

export default Main;
