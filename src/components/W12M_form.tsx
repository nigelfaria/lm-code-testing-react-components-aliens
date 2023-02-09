import { useState } from 'react';
import W12MHeader from './W12M_header';
import SpeciesName from './species';
import PlanetName from './planet';
import NumberBeings from './number_beings';
import TwoPlusAnswer from './two_plus_answer';
import ReasonSparing from './reason_sparing';
import DisplayForm from './display_form';

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
			<button type='reset' onClick={()=>{
				setSubmitClicked(false);
			}}>Reset</button>
		</section>
		<section className='DisplayForm'>
			<DisplayForm speciesName={speciesName} planetName={planetName} numberBeings={numberBeings} twoPlusAnswer={twoPlusAnswer} reasonSparing={reasonSparing} submitClicked={submitClicked}/>
		</section>
		</>
	);
};

export default W12MForm;
