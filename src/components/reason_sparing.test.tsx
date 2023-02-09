import { render, screen } from '@testing-library/react';
import ReasonSparing, {ReasonSparingProps} from './reason_sparing';
import user from '@testing-library/user-event';


describe('ReasonSparing', () => {
    const labelText = "Reason for sparing:";
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: ReasonSparingProps = {
            reasonSparing: "Some reason",
            handleChange: mockUpdate,
            }
        
        render(<ReasonSparing {...requiredProps} />);

        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.reasonSparing)).toBeInTheDocument();
    });

    it(`Given rendered component, 
    When the user inputs something
    Then the handleChange function is called`, async () => {
        const mockChange = jest.fn();
        const requiredProps: ReasonSparingProps = {
            reasonSparing: "",
            handleChange: mockChange,
        }
        render(<ReasonSparing {...requiredProps} />);
        await user.type(screen.getByLabelText(labelText),"123");
        expect(requiredProps.handleChange).toHaveBeenCalledTimes(3);
    });

});