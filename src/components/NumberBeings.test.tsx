import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import NumberBeings, { NumberBeingsProps } from './NumberBeings';

describe('NumberBeings', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockChange = jest.fn();
        const requiredProps: NumberBeingsProps = {
            numberBeings: 0,
            handleChange: mockChange,
        }

        render(<NumberBeings {...requiredProps} />);

        expect(screen.getByText("Number of beings:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.numberBeings)).toBeInTheDocument();
    });
    it(`Given valid inputs, 
        When the component is rendered
        Then no error messages are present`, async () => {
        const mockUpdate = jest.fn();
        const requiredProps: NumberBeingsProps = {
            numberBeings: 0,
            handleChange: mockUpdate,
        }

        render(<NumberBeings {...requiredProps} />);
        const inputElement = screen.getByLabelText("Number of beings:");
        await user.type(inputElement, "10000000000");
        expect(screen.queryByText("Must be numbers only")).not.toBeInTheDocument();
        expect(screen.queryByText("Number of Beings must be at least 1,000,000,000")).not.toBeInTheDocument();
    });
    it(`Given text input, 
    When the component is rendered
    Then the appropriate error messages are present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: NumberBeingsProps = {
            numberBeings: 0,
            handleChange: mockUpdate,
        }

        render(<NumberBeings {...requiredProps} />);

        expect(screen.queryByText("Must be numbers only")).not.toBeInTheDocument();
        expect(screen.queryByText("Number of Beings must be at least 1,000,000,000")).not.toBeInTheDocument();
    });


});