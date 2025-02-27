import { useState } from "react";
import ErrorMessage from "./error_message";

export interface PlanetNameProps {
    planetName: string;
    handleChange: (newValue: string) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({ planetName, handleChange }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 3 || value.length > 49) {
            return "Planet Name must be between 2 and 49 characters"
        }
        if (/[^a-z A-Z0-9]/.test(value)) {
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
                            handleChange(e.target.value);
                        }
                    } />
                <ErrorMessage message={errorMessage} />
            </label>

    </>
)};

export default PlanetName;
