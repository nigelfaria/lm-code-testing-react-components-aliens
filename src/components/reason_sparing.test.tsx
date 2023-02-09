import { render, screen } from '@testing-library/react';
import ReasonSparing, {ReasonSparingProps} from './reason_sparing';

describe('ReasonSparing', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: ReasonSparingProps = {
            reasonSparing: "Some reason",
            handleChange: mockUpdate,
            }
        
        render(<ReasonSparing {...requiredProps} />);

        expect(screen.getByText("Reason for sparing:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.reasonSparing)).toBeInTheDocument();
    });
});