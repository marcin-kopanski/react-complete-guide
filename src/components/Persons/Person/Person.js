import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
		if (this.props.position === 0) this.inputElement.focus();
	}

	componentWillUnmount() {
		console.log('[Person.js] Inside componentWillUnmount()');
	}

	render() {
		console.log('[Person.js] Inside render()');

		return (
			<React.Fragment>
				<p onClick={this.props.click}>I'm a {this.props.person.name} and I am {this.props.person.age} years
					old!</p>
				<p>{this.props.children}</p>
				<input
					ref={(inp) => {this.inputElement = inp}}
					type="text"
					onChange={this.props.changed}
					defaultValue={this.props.person.name}/>
			</React.Fragment>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	changed: PropTypes.func,
	person: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		age: PropTypes.number
	})
}

export default WithClassComponent(Person, classes.Person);
