import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 28},
            {name: "Manu", age: 29},
            {name: "Marcin", age: 34}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log('click');

        // DON'T DO THIS this.state.persons[0].name = "Maximilian";

        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Manu", age: 29},
                {name: "Marcin", age: 32}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Maximilian", age: 28},
                {name: event.target.value, age: 29},
                {name: "Marcin", age: 32}
            ]
        })
    };

    togglePersonsHandler = () => {
        this.setState((prevState) => ({
            showPersons: !prevState.showPersons
        }))
    };

    render() {
        const style = {
            backgroundColor: 'yellow',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person person={this.state.persons[0]} click={this.switchNameHandler.bind(this, "Maxik")}/>
                    <Person person={this.state.persons[1]} click={this.switchNameHandler.bind(this, "Max!!")}>My hobbies: Racing!</Person>
                    <Person person={this.state.persons[2]} click={this.switchNameHandler.bind(this, "Maaaarcin")} changed={this.nameChangedHandler}/>
                </div>
            )
        }

        return (
            <div className="app">
                <h1>Hi, I'm React App</h1>
                <p>This is really working!</p>

                <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Show Persons</button>
                {/*<button style={style} onClick={this.switchNameHandler.bind(this, "Maximilian")}>Switch name</button>*/}
                {/* OPTIONAL but inefficient <button onClick={() => this.switchNameHandler("Maximillian!!!")}>Switch name</button>*/}

                {/*{this.state.showPersons ?*/}
                    {/*<div>*/}
                        {/*<Person person={this.state.persons[0]} click={this.switchNameHandler.bind(this, "Maxik")}/>*/}
                        {/*<Person person={this.state.persons[1]} click={this.switchNameHandler.bind(this, "Max!!")}>My*/}
                            {/*hobbies: Racing!</Person>*/}
                        {/*<Person person={this.state.persons[2]} click={this.switchNameHandler.bind(this, "Maaaarcin")}*/}
                                {/*changed={this.nameChangedHandler}/>*/}
                    {/*</div>*/}
                    {/*: null*/}
                {/*}*/}

                {persons}
            </div>
        );

        // return React.createElement('div', {className: "app"}, React.createElement('h1', null, 'Now it\'s work!!'))
    }
}

export default App;
