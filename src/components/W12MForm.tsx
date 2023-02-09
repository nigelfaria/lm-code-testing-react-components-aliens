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
			<SpeciesName speciesName={speciesName} handleChange={(newValue: string) => setSpeciesName(newValue)} />
			<PlanetName planetName={planetName} handleChange={(newValue: string) => setPlanetName(newValue)} />
			<NumberBeings numberBeings={numberBeings} handleChange={(newValue:string) => setNumberBeings(parseInt(newValue))} />
			<TwoPlusAnswer twoPlusAnswer={twoPlusAnswer} handleChange={(newValue: string) => setTwoPlusAnswer(newValue)} />
			<ReasonSparing reasonSparing={reasonSparing} handleChange={(newValue: string) => setReasonSparing(newValue)} />
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
