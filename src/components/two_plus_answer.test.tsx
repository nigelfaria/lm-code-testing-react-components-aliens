import { render, screen } from '@testing-library/react';
import TwoPlusAnswer, {TwoPlusAnswerProps} from './two_plus_answer';

describe('TwoPlusAnswer', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockChange = jest.fn();
        const requiredProps: TwoPlusAnswerProps = {
            twoPlusAnswer: "4",
            handleChange: mockChange,
            }
        
        render(<TwoPlusAnswer {...requiredProps} />);

        expect(screen.getByText("What is 2+2?:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.twoPlusAnswer)).toBeInTheDocument();
    });
});