import { render, screen } from '@testing-library/react';
import PlanetName, {PlanetNameProps} from './planet';
import user from '@testing-library/user-event';


describe('PlanetName', () => {
    const labelText = "Planet Name:";
    it(`Given the required props, 
    When the component is rendered
    Then the label text should be present`, () => {
        const mockUpdate = jest.fn();
        const requiredProps: PlanetNameProps = {
            planetName: "Earth",
            handleChange: mockUpdate,
            }
        
        render(<PlanetName {...requiredProps} />);

        expect(screen.getByText(labelText)).toBeInTheDocument();
        expect(screen.getByDisplayValue(requiredProps.planetName)).toBeInTheDocument();
    });

    it(`Given rendered component, 
    When the user inputs something
    Then the handleChange function is called`, async () => {
        const mockChange = jest.fn();
        const requiredProps: PlanetNameProps = {
            planetName: "",
            handleChange: mockChange,
        }
        render(<PlanetName {...requiredProps} />);
        await user.type(screen.getByLabelText(labelText),"123");
        expect(requiredProps.handleChange).toHaveBeenCalledTimes(3);
    });

});