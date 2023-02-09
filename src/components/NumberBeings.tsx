import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface NumberBeingsProps {
    numberBeings: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NumberBeings: React.FC<NumberBeingsProps> = ({ numberBeings, handleChange }) => {
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
            <label htmlFor="NumberBeings">Number of beings:</label>
            <input id="NumberBeings" type='text' value={numberBeings} onChange={
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

export default NumberBeings;
