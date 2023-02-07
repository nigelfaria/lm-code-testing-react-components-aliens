
export interface PlanetNameProps {
    planetName: string;
    updatePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({ planetName, updatePlanetName }) => (
    <>
        <label>
            Planet Name:
            <input type='text' value={planetName} onChange={updatePlanetName} />
        </label>

    </>
);

export default PlanetName;
