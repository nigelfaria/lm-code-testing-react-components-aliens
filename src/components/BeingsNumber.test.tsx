import { render, screen } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
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
});