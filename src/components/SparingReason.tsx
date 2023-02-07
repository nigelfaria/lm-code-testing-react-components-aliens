import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface SparingReasonProps {
    sparingReason: string;
    updateSparingReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const SparingReason: React.FC<SparingReasonProps> = ({ sparingReason, updateSparingReason }) => {
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
                <textarea value={sparingReason} rows={4} cols={50}onChange={
                        (e) => {
                            const errorMessage = validate(e.target.value)
                            setErrorMessage(errorMessage);
                            updateSparingReason(e);
                        }
                    } />
                <ErrorMessage message={errorMessage} />
            </label>
        </>
    )
};

export default SparingReason;
