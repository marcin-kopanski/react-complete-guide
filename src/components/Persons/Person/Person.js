import React, {Component} from 'react';
// import Radium from 'radium';

import WithClassComponent from '../../../hoc/WithClassComponent';
import classes from './Person.css';

class Person extends Component {
	constructor(props) {
		super(props);

		console.log('[Person.js] Inside Constructor');
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}

	componentWillUnmount() {
		console.log('[Person.js] Inside componentWillUnmount()');
	}

	render() {
		console.log('[Person.js] Inside render()');

		// const rnd = Math.random();
		//
		// if (rnd > 0.7) {
		//     throw new Error('Something went wrong!');
		// }

		return (
			<React.Fragment>
				<p onClick={this.props.click}>I'm a {this.props.person.name} and I am {this.props.person.age} years
					old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} defaultValue={this.props.person.name}/>
			</React.Fragment>
		)
	}
}

export default WithClassComponent(Person, classes.Person);
