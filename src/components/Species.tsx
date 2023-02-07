
export interface SpeciesNameProps {
    speciesName: string;
    updateSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, updateSpeciesName }) => (
    <>
        <label>
            Species Name:
            <input type='text' value={speciesName} onChange={updateSpeciesName} />
        </label>

    </>
);

export default SpeciesName;
