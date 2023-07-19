/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import About from '../components/About/About';

it('renders the text "Little Lemon"', () => {
	render(<About />);
	const restaurantName = screen.getByTestId('about-restaurant-title');
	expect(restaurantName).toBeInTheDocument();
	expect(restaurantName).toHaveTextContent('Little Lemon');
});

it('renders the text "Chicago"', () => {
	render(<About />);
	const restaurantLocation = screen.getByTestId('about-restaurant-location');
	expect(restaurantLocation).toBeInTheDocument();
	expect(restaurantLocation).toHaveTextContent('Chicago');
});
