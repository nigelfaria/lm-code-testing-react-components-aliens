import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './Species';
import PlanetName from './Planet';
import NumberBeings from './NumberBeings';
import TwoPlusAnswer from './TwoPlusAnswer';
import ReasonSparing from './ReasonSparing';
import DisplayForm from './DisplayForm';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('Human');
	const [planetName, setPlanetName] = useState<string>('3rd Rock');
	const [numberBeings, setNumberBeings] = useState<number>(8014332994);
	const [twoPlusAnswer, setTwoPlusAnswer] = useState<string>('4');
	const [reasonSparing, setReasonSparing] = useState<string>('Just give me a reason');
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);

	return (
		<>
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value)} />
			<NumberBeings numberBeings={numberBeings} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumberBeings(parseInt(e.target.value))} />
			<TwoPlusAnswer twoPlusAnswer={twoPlusAnswer} handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTwoPlusAnswer(e.target.value)} />
			<ReasonSparing reasonSparing={reasonSparing} handleChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReasonSparing(e.target.value)} />
			<button type='submit' onClick={()=>{
				setSubmitClicked(true);
			}}>Submit</button>
		</section>
		<section className='DisplayForm'>
			<DisplayForm speciesName={speciesName} planetName={planetName} numberBeings={numberBeings} twoPlusAnswer={twoPlusAnswer} reasonSparing={reasonSparing} submitClicked={submitClicked}/>
		</section>
		</>
	);
};

export default W12MForm;
