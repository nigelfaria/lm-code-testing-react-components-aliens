import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import NumberBeings, { NumberBeingsProps } from './number_beings';

describe('NumberBeings', () => {
    const labelText = "Number of beings:";
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockChange = jest.fn();
        const requiredProps: NumberBeingsProps = {
            numberBeings: 400,
            handleChange: mockChange,
        }

        render(<NumberBeings {...requiredProps} />);

        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.numberBeings)).toBeInTheDocument();
    });

    it(`Given rendered component, 
    When the user inputs something
    Then the handleChange function is called`, async () => {
        const mockChange = jest.fn();
        const requiredProps: NumberBeingsProps = {
            numberBeings: 1,
            handleChange: mockChange,
        }
        render(<NumberBeings {...requiredProps} />);
        await user.type(screen.getByLabelText(labelText),"123");
        expect(requiredProps.handleChange).toHaveBeenCalledTimes(3);
    });


});