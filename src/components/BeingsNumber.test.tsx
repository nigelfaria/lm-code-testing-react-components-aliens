import { render, screen, fireEvent } from '@testing-library/react';
import BeingsNumber, { BeingsNumberProps } from './BeingsNumber';

describe('BeingsNumber', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: BeingsNumberProps = {
            beingsNumber: 40,
            updateBeingsNumber: mockUpdate,
        }

        render(<BeingsNumber {...requiredProps} />);

        expect(screen.getByText("Number of beings:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.beingsNumber)).toBeInTheDocument();
    });
    it(`Given valid inputs, 
        When the component is rendered
        Then no error messages are present`, async () => {
        const mockUpdate = jest.fn();
        const requiredProps: BeingsNumberProps = {
            beingsNumber: 400,
            updateBeingsNumber: mockUpdate,
        }

        render(<BeingsNumber {...requiredProps} />);
        const inputElement = screen.getByDisplayValue(requiredProps.beingsNumber);
        await fireEvent.change(inputElement, {target: {value:'10000000000'}})
        await screen.findByText("Number of Beings must be at least 1,000,000,000")
        expect(screen.queryByText("Must be numbers only")).not.toBeInTheDocument();
        expect(screen.getByText("Number of Beings must be at least 1,000,000,000")).toBeInTheDocument();
    });
    it(`Given text input, 
    When the component is rendered
    Then the appropriate error messages are present`, () => {
    const mockUpdate = jest.fn();
    const requiredProps: BeingsNumberProps = {
        beingsNumber: 40,
        updateBeingsNumber: mockUpdate,
    }

    render(<BeingsNumber {...requiredProps} />);

    expect(screen.queryByText("Must be numbers only")).not.toBeInTheDocument();
    expect(screen.queryByText("Number of Beings must be at least 1,000,000,000")).not.toBeInTheDocument();
});


});