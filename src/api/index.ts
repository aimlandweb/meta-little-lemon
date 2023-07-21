import { Submission } from '../components/BookingPage/BookingPage';

interface Options {
	method: string;
	headers: {
		'Content-Type': string;
	};
	body: string;
}

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchAPI = async (): Promise<Submission[] | []> => {
	try {
		const response = await fetch(`${baseURL}/api/fetchAPI`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data: Submission[] = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
};

export const submitAPI = async (
	options: Options
): Promise<Submission | null> => {
	try {
		const response = await fetch(`${baseURL}/api/submitAPI`, options);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data: Submission = await response.json();
		return data;
	} catch (error) {
		console.error('Error submitting data:', error);
		return null;
	}
};
