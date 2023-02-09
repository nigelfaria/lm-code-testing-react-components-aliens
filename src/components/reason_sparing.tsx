import { useState } from "react";
import ErrorMessage from "./error_message";

export interface ReasonSparingProps {
    reasonSparing: string;
    handleChange: (newValue: string) => void;
}
const ReasonSparing: React.FC<ReasonSparingProps> = ({ reasonSparing, handleChange }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 18 || value.length > 153) {
            return "Reason for Sparing must be between 17 and 153 characters"
        }
        return undefined;
    }

    return (
        <>
            <label>
                Reason for sparing:
                <textarea value={reasonSparing} rows={4} cols={50} onChange={
                    (e) => {
                        const errorMessage = validate(e.target.value)
                        setErrorMessage(errorMessage);
                        handleChange(e.target.value);
                    }
                } />
                <ErrorMessage message={errorMessage} />
            </label>
        </>
    )
};

export default ReasonSparing;
