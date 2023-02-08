import { render, screen } from '@testing-library/react';
import Species, {SpeciesNameProps} from './Species';

describe('Species', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: SpeciesNameProps = {
            speciesName: "Some species",
            updateSpeciesName: mockUpdate,
            }
        
        render(<Species {...requiredProps} />);

        expect(screen.getByText("Species Name:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.speciesName)).toBeInTheDocument();
    });
});