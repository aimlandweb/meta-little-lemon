import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/booking' element={<BookingPage />} />
					<Route path='*' element={<Main />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
