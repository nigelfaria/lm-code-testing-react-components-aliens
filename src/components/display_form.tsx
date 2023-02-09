import { useEffect } from "react";
interface DisplayFormProps {
    speciesName: string;
    planetName: string;
    numberBeings: number;
    twoPlusAnswer: string;
    reasonSparing: string;
    submitClicked: boolean;
}

const DisplayForm: React.FC<DisplayFormProps> = ({ speciesName, planetName, numberBeings, twoPlusAnswer, reasonSparing, submitClicked }) => {
    useEffect(() => { }, [submitClicked]);
    if (!submitClicked) {
        return null;
    }
    else {
        return (<>
            <div>
                <p>{speciesName}</p>
                <p>{planetName}</p>
                <p>{numberBeings}</p>
                <p>{twoPlusAnswer}</p>
                <p>{reasonSparing}</p>

            </div>
        </>);
    }

};

export default DisplayForm;
