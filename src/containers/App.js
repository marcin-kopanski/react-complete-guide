import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Max", age: 28},
            {id: 2, name: "Manu", age: 29},
            {id: 3, name: "Marcin", age: 34}
        ],
        showPersons: false
    };

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
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler.bind(this)}
                         changed={this.nameChangedHandler.bind(this)} />
            );
        }

        return (
            <div className={classes.app}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    toggle={this.togglePersonsHandler.bind(this)} />
                {persons}
            </div>
        );
    }
}

export default App;
