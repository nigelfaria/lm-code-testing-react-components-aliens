
interface SpeciesNameProps {
    speciesName:string;
    updateSpeciesName: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
const SpeciesName:React.FC<SpeciesNameProps> = ({speciesName, updateSpeciesName}) => (
    <>
        <label>
            Species Name:
        </label>
        <input type='text' value={speciesName} onChange={updateSpeciesName} />
    </>
);

export default SpeciesName;
