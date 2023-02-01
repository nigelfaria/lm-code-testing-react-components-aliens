
interface PlanetNameProps {
    planetName:string;
    updatePlanetName: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
const PlanetName:React.FC<PlanetNameProps> = ({planetName, updatePlanetName}) => (
    <>
        <label>
            Planet Name:
        </label>
        <input type='text' value={planetName} onChange={updatePlanetName} />
    </>
);

export default PlanetName;
