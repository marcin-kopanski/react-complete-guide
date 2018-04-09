import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = 'green';
    const pClass = [];

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
        pClass.push(classes.red);
    }

    if (props.persons.length <= 1) {
        pClass.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm React App</h1>
            <p className={pClass.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggle}>Show Persons</button>
        </div>
    );
};

export default cockpit;