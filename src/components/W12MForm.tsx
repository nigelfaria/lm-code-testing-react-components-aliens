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
	const [twoPlusAnswer, setTwoPlusAnswer] = useState<string>('4');
	const [sparingReason, setSparingReason] = useState<string>('Just give me a reason');
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	return (
		<>
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value)} />
			<BeingsNumber beingsNumber={beingsNumber} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setBeingsNumber(parseInt(e.target.value))} />
			<TwoPlusAnswer twoPlusAnswer={twoPlusAnswer} handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTwoPlusAnswer(e.target.value)} />
			<SparingReason sparingReason={sparingReason} handleChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSparingReason(e.target.value)} />
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
