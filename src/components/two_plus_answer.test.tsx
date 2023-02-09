import { render, screen } from '@testing-library/react';
import TwoPlusAnswer, {TwoPlusAnswerProps} from './two_plus_answer';
import user from '@testing-library/user-event';

describe('TwoPlusAnswer', () => {
    const labelText = "What is 2+2?:";
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockChange = jest.fn();
        const requiredProps: TwoPlusAnswerProps = {
            twoPlusAnswer: "4",
            handleChange: mockChange,
            }
        
        render(<TwoPlusAnswer {...requiredProps} />);

        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.twoPlusAnswer)).toBeInTheDocument();
    });

    it(`Given rendered component, 
    When the user inputs something
    Then the handleChange function is called`, async () => {
        const mockChange = jest.fn();
        const requiredProps: TwoPlusAnswerProps = {
            twoPlusAnswer: "",
            handleChange: mockChange,
        }
        render(<TwoPlusAnswer {...requiredProps} />);
        const select = screen.getByLabelText(labelText);
        await user.selectOptions(select, "Not 4");        
        expect(requiredProps.handleChange).toHaveBeenCalledTimes(1);
    });

});