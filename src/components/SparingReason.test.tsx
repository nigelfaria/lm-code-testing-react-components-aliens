import { render, screen } from '@testing-library/react';
import SparingReason, {SparingReasonProps} from './SparingReason';

describe('BeingsNumber', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: SparingReasonProps = {
            sparingReason: "Some reason",
            updateSparingReason: mockUpdate,
            }
        
        render(<SparingReason {...requiredProps} />);

        expect(screen.getByText("Reason for sparing:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.sparingReason)).toBeInTheDocument();
    });
});