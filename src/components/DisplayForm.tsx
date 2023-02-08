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
            <div>
                <p>{speciesName}</p>
                <p>{planetName}</p>
                <p>{beingsNumber}</p>
                <p>{twoPlusAnswer}</p>
                <p>{sparingReason}</p>

            </div>
        </>);
    }

};

export default DisplayForm;
