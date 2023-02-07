
export interface TwoPlusAnswerProps {
    twoPlusAnswer: string;
    updateTwoPlusAnswer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const TwoPlusAnswer: React.FC<TwoPlusAnswerProps> = ({ twoPlusAnswer, updateTwoPlusAnswer }) => (
    <>
        <label>
            What is 2+2?:
            <select value={twoPlusAnswer} onChange={updateTwoPlusAnswer} >
                <option value="Not4">Not 4</option>
                <option value="4">4</option>
            </select>
        </label>


    </>
);

export default TwoPlusAnswer;
