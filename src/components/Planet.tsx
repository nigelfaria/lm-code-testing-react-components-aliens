import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps {
    planetName: string;
    updatePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({ planetName, updatePlanetName }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 3 || value.length > 49) {
            return "Planet Name must be between 2 and 49 characters"
        }
        if (/[^a-z A-Z]/.test(value)) {
            return "Planet Name cannot have special characters"
        }
        return undefined;
    }

    return (
    <>
        <label>
            Planet Name:
            <input type='text' value={planetName} onChange={
                        (e) => {
                            const errorMessage = validate(e.target.value)
                            setErrorMessage(errorMessage);
                            updatePlanetName(e);
                        }
                    } />
                <ErrorMessage message={errorMessage} />
            </label>

    </>
)};

export default PlanetName;
