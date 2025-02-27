import { useState } from "react";
import ErrorMessage from "./error_message";
export interface SpeciesNameProps {
    speciesName: string;
    handleChange: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, handleChange }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 4 || value.length > 23) {
            return "Species Name must be between 3 and 23 characters"
        }
        if (/[^a-z A-Z]/.test(value)) {
            return "Species Name cannot have numbers or special characters"
        }
        return undefined;
    }

    return (
        <>
            <label>
                Species Name:
                <input type='text' value={speciesName}
                    onChange={
                        (e) => {
                            const errorMessage = validate(e.target.value)
                            setErrorMessage(errorMessage);
                            handleChange(e.target.value);
                        }
                    } />
                <ErrorMessage message={errorMessage} />
            </label>

        </>
    );
};

export default SpeciesName;
