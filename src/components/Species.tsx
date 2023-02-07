import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
export interface SpeciesNameProps {
    speciesName: string;
    updateSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, updateSpeciesName }) => {
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
                            updateSpeciesName(e);
                        }
                    } />
                <ErrorMessage message={errorMessage} />
            </label>

        </>
    );
};

export default SpeciesName;
