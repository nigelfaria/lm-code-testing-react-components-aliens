import { useEffect } from "react";
interface DisplayFormProps {
    speciesName: string;
    planetName: string;
    beingsNumber: number;
    twoPlusAnswer: string;
    sparingReason: string;
    submitClicked: boolean;
}

const DisplayForm: React.FC<DisplayFormProps> = ({ speciesName, planetName, beingsNumber, twoPlusAnswer, sparingReason, submitClicked }) => {
    useEffect(() => { }, [submitClicked]);
    if (!submitClicked) {
        return null;
    }
    else {
        return (<>
            <label>
                {speciesName}
            </label>
            <label>
                {planetName}
            </label>
            <label>
                {beingsNumber}
            </label>
            <label>
                {twoPlusAnswer}
            </label>
            <label>
                {sparingReason}
            </label>
        </>);
    }

};

export default DisplayForm;
