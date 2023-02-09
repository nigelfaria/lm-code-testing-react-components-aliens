import { render, screen } from '@testing-library/react';
import W12MForm from './W12M_form';
import user from '@testing-library/user-event';
import { SpeciesNameProps } from './species';


describe('W12MForm', () => {
	test('renders form element', () => {
		// we can hold onto the object returned from render()
		// this object has a container property that we can destructure and inspect
		const { container } = render(<W12MForm />);

		// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
		// for example, the firstChild of our container should be our form element
		expect(container.firstChild).toHaveClass('w12MForm');
	});

	const speciesLabelText = "Species Name:";
	it(`Given user input less than 3 characters to Species Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(speciesLabelText)
		await user.type(element,"E");
		expect(screen.getByText("Species Name must be between 3 and 23 characters")).toBeInTheDocument();

	});

	it(`Given user input more than 24 characters to Species Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(speciesLabelText)
		await user.type(element,"This is a long species name over 24 characters");
		expect(screen.getByText("Species Name must be between 3 and 23 characters")).toBeInTheDocument();

	});

	it(`Given user input containing numbers to Species Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(speciesLabelText)
		await user.type(element,"Earthling1.0");
		expect(screen.getByText("Species Name cannot have numbers or special characters")).toBeInTheDocument();

	});

	it(`Given user input containing special characters to Species Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(speciesLabelText)
		await user.type(element,"Earthling##");
		expect(screen.getByText("Species Name cannot have numbers or special characters")).toBeInTheDocument();

	});


	const planetLabelText = "Planet Name:";
	it(`Given user input less than 2 characters to Planet Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(planetLabelText)
		await user.type(element,"E");
		expect(screen.getByText("Planet Name must be between 2 and 49 characters")).toBeInTheDocument();

	});

	it(`Given user input more than 49 characters to Planet Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(planetLabelText)
		await user.type(element,"This is a long long long long long long long long Planet name over 49 characters");
		expect(screen.getByText("Planet Name must be between 2 and 49 characters")).toBeInTheDocument();

	});

	it(`Given user input containing special characters to Planet Name, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(planetLabelText)
		await user.type(element,"Earth##");
		expect(screen.getByText("Planet Name cannot have special characters")).toBeInTheDocument();

	});


	const numberBeingsLabelText = "Number of Beings:";
	it(`Given user input less than 1000000000 to NumberBeings, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(numberBeingsLabelText)
		await user.type(element,"1");
		expect(screen.getByText("Number of Beings must be at least 1,000,000,000")).toBeInTheDocument();
	});

	it(`Given non numeric user input to NumberBeings , 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(numberBeingsLabelText)
		await user.type(element,"This is not a number");
		expect(screen.getByText("Must be numbers only")).toBeInTheDocument();
	});

	const twoPlusAnwerLabelText = "What is 2+2?:";
	it(`Given user input of Not 4 to twoPlusAnwer, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByLabelText(twoPlusAnwerLabelText);
        await user.selectOptions(element, "Not 4");        
		expect(screen.getByText("4 Must be selected")).toBeInTheDocument();
	});


	const reasonSparingLabelText = "Reason for sparing:";
	it(`Given user input less than 17 character to Reason for Sparing, 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(reasonSparingLabelText)
		await user.type(element,"17");
		expect(screen.getByText("Reason for Sparing must be between 17 and 153 characters")).toBeInTheDocument();
	});

	it(`Given non numeric user input to reasonSparing , 
    When the component is rendered
    Then the error message should be present`, async () => {
		render(<W12MForm />);
		const element = screen.getByText(reasonSparingLabelText)
		await user.type(element,`This is a long bit of text that is definitely more than 53 characters, becuase it keeps repeating itself.
		This is a long bit of text that is definitely more than 53 characters, becuase it keeps repeating itself.
		This is a long bit of text that is definitely more than 53 characters, becuase it keeps repeating itself.`);
		expect(screen.getByText("Reason for Sparing must be between 17 and 153 characters")).toBeInTheDocument();
	});




});

