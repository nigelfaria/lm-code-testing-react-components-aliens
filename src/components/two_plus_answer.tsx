import { useState } from "react";
import ErrorMessage from "./error_message";

export interface TwoPlusAnswerProps {
    twoPlusAnswer: string;
    handleChange: (newValue: string) => void;
}
const TwoPlusAnswer: React.FC<TwoPlusAnswerProps> = ({ twoPlusAnswer, handleChange }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const validate: (value: string) => string | undefined = (value) => {
        if (value === "Not4") {
            return "4 Must be selected"
        }
        return undefined;
    }

    return (
        <>
            <label>
                What is 2+2?:
                <select value={twoPlusAnswer} onChange={
                    (e) => {
                        const errorMessage = validate(e.target.value)
                        setErrorMessage(errorMessage);
                        handleChange(e.target.value);
                    }
                }>
                <option value="Not4">Not 4</option>
                <option value="4">4</option>
            </select>
            <ErrorMessage message={errorMessage} />
        </label>


        </>
    )
};

export default TwoPlusAnswer;
