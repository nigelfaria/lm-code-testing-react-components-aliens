import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './Species';
import PlanetName from './Planet';
import BeingsNumber from './BeingsNumber';
import TwoPlusAnswer from './TwoPlusAnswer';
import SparingReason from './SparingReason';
import DisplayForm from './DisplayForm';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('Human');
	const [planetName, setPlanetName] = useState<string>('3rd Rock');
	const [beingsNumber, setBeingsNumber] = useState<number>(8014332994);
	const [twoPlusAnswer, setTwoPlusAnswer] = useState<string>('Not 4');
	const [sparingReason, setSparingReason] = useState<string>('Just give me a reason');
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	return (
		<>
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} updateSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
			<br></br>
			<PlanetName planetName={planetName} updatePlanetName={(e: any) => setPlanetName(e.target.value)} />
			<br></br>
			<BeingsNumber beingsNumber={beingsNumber} updateBeingsNumber={(e: any) => setBeingsNumber(e.target.value)} />
			<br></br>
			<TwoPlusAnswer twoPlusAnswer={twoPlusAnswer} updateTwoPlusAnswer={(e: any) => setTwoPlusAnswer(e.target.value)} />
			<br></br>
			<SparingReason sparingReason={sparingReason} updateSparingReason={(e: any) => setSparingReason(e.target.value)} />
			<br></br>
			<button type='submit' onClick={()=>{
				setSubmitClicked(true);
			}}>Submit</button>
		</section>
		<section className='DisplayForm'>
			<DisplayForm speciesName={speciesName} planetName={planetName} beingsNumber={beingsNumber} twoPlusAnswer={twoPlusAnswer} sparingReason={sparingReason} submitClicked={submitClicked}/>
		</section>
		</>
	);
};

export default W12MForm;
