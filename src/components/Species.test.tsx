import { render, screen } from '@testing-library/react';
import SpeciesName, {SpeciesNameProps} from './species';
import user from '@testing-library/user-event';

describe('Species', () => {
    const labelText = "Species Name:";
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: SpeciesNameProps = {
            speciesName: "Some species",
            handleChange: mockUpdate,
            }
        
        render(<SpeciesName {...requiredProps} />);

        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.speciesName)).toBeInTheDocument();
    });

    it(`Given rendered component, 
    When the user inputs something
    Then the handleChange function is called`, async () => {
        const mockChange = jest.fn();
        const requiredProps: SpeciesNameProps = {
            speciesName: "",
            handleChange: mockChange,
        }
        render(<SpeciesName {...requiredProps} />);
        await user.type(screen.getByLabelText(labelText),"123");
        expect(requiredProps.handleChange).toHaveBeenCalledTimes(3);
    });

});