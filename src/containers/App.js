import React, {PureComponent} from 'react';
// import Radium, {StyleRoot} from 'radium';

import classes from './App.css';

import withClass from '../hoc/WithClassF';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends PureComponent {
	constructor(props) {
		super(props);

		console.log('[App.js] Inside Constructor');

		this.state = {
			persons: [
				{id: 1, name: "Max", age: 28},
				{id: 2, name: "Manu", age: 29},
				{id: 3, name: "Marcin", age: 34}
			],
			showPersons: false
		};
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount()');
	}

	// use PureComponent instead of checking all these props
	// shouldComponentUpdate(nextProps, nextState) {
	//     console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
	//     return this.state.showPersons !== nextState.showPersons ||
	//       this.state.persons !== nextState.persons;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate()');
	}

	// NEW FEATURE
	// state = {
	//     persons: [
	//         {id: 1, name: "Max", age: 28},
	//         {id: 2, name: "Manu", age: 29},
	//         {id: 3, name: "Marcin", age: 34}
	//     ],
	//     showPersons: false
	// };

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	};

	togglePersonsHandler = () => {
		this.setState((prevState) => ({
			showPersons: !prevState.showPersons
		}))
	};

	deletePersonHandler(index) {
		const persons = [...this.state.persons];
		persons.splice(index, 1);

		this.setState({
			persons: persons
		});
	};

	render() {
		console.log('[App.js] Inside render()');

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons persons={this.state.persons}
						 clicked={this.deletePersonHandler.bind(this)}
						 changed={this.nameChangedHandler.bind(this)}/>
			);
		}

		return (
			<React.Fragment>
				<button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					toggle={this.togglePersonsHandler.bind(this)}/>
				{persons}
			</React.Fragment>
		);
	}
}

// hoc wrapper withClassF
export default withClass(App, classes.app);
