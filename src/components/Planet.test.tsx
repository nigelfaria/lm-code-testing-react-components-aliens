import { render, screen } from '@testing-library/react';
import PlanetName, {PlanetNameProps} from './Planet';

describe('PlanetName', () => {
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: PlanetNameProps = {
            planetName: "Earth",
            handleChange: mockUpdate,
            }
        
        render(<PlanetName {...requiredProps} />);

        expect(screen.getByText("Planet Name:")).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.planetName)).toBeInTheDocument();
    });
});