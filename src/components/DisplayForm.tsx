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
                <br></br>
            </label>
            <label>
                {planetName}
                <br></br>
            </label>
            <label>
                {beingsNumber}
                <br></br>
            </label>
            <label>
                {twoPlusAnswer}
                <br></br>
            </label>
            <label>
                {sparingReason}
                <br></br>
            </label>
        </>);
    }

};

export default DisplayForm;
