import React from 'react';
// import Radium from 'radium';

import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.person.name} and I am {props.person.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.person.name} />
        </div>
    )
};

export default person;