import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

	let btnClass = classes.button;
	const pClass = [];

	if (props.showPersons) {
		btnClass = [classes.button, classes.red].join(' ');
	}

	if (props.persons.length <= 2) {
		pClass.push(classes.red);
	}

	if (props.persons.length <= 1) {
		pClass.push(classes.bold);
	}

	return (
		<React.Fragment>
			<h1>{props.appTitle}</h1>
			<p className={pClass.join(' ')}>This is really working!</p>
			<button
				className={btnClass}
				onClick={props.toggle}>Show Persons
			</button>

			<button onClick={props.login}>Log in</button>
		</React.Fragment>
	);
};

export default cockpit;
