import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface BeingsNumberProps {
    beingsNumber: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BeingsNumber: React.FC<BeingsNumberProps> = ({ beingsNumber, handleChange }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (/[^0-9]/.test(value)) {
            return "Must be numbers only";
        }
        if (parseInt(value) < 1000000000) {
            return "Number of Beings must be at least 1,000,000,000";
        }
        return undefined;
    }

    return (
        <div>
            <label htmlFor="beingsNumber">Number of beings:</label>
            <input id="beingsNumber" type='text' value={beingsNumber} onChange={
                (e) => {
                    const errorMessage = validate(e.target.value)
                    setErrorMessage(errorMessage);
                    handleChange(e);
                }
            } />
            <ErrorMessage message={errorMessage} />
        </div>
    )
};

export default BeingsNumber;
