import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
	constructor(props) {
		super(props);

		console.log('[Persons.js] Inside Constructor');
	}

	componentWillMount() {
		console.log('[Persons.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount()');
	}

	componentWillUnmount() {
		console.log('[Persons.js] Inside componentWillUnmount()');
	}

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
	}

	// use PureComponent instead of checking all these props
	// shouldComponentUpdate(nextProps, nextState) {
	//     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
	//     return nextProps.persons !== this.props.persons ||
	//         nextProps.changed !== this.props.changed ||
	//         nextProps.clicked !== this.props.clicked;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
	}

	render() {
		console.log('[Persons.js] Inside render()');

		return this.props.persons.map((element, index) => {
			return <Person key={element.id} person={element}
						   position={index}
						   click={() => this.props.clicked(index)}
						   changed={(event) => this.props.changed(event, element.id)}/>
		});
	}
}

export default Persons;
