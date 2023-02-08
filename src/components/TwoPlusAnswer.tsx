import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface TwoPlusAnswerProps {
    twoPlusAnswer: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
                        handleChange(e);
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
