import { render, screen } from '@testing-library/react';
import W12MHeader from './W12M_header';

test('renders header text', () => {
	render(<W12MHeader />);
	const someHeaderText = screen.getByText(
		/Each species may only submit ONE W-12-M form./i
	);
	expect(someHeaderText).toBeInTheDocument();
});
