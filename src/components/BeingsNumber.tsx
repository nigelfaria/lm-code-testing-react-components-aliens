
export interface BeingsNumberProps {
    beingsNumber: number;
    updateBeingsNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BeingsNumber: React.FC<BeingsNumberProps> = ({ beingsNumber, updateBeingsNumber }) => (
    <>
        <label>
            Number of beings:
            <input type='text' value={beingsNumber} onChange={updateBeingsNumber} />
        </label>
    </>
);

export default BeingsNumber;
