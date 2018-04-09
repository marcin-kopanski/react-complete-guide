import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';

import classes from './App.css';

import Person from './Persons/Person/Person';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Max", age: 28},
            {id: 2, name: "Manu", age: 29},
            {id: 3, name: "Marcin", age: 34}
        ],
        showPersons: false
    };

    // switchNameHandler = (newName) => {
    //     // console.log('click');
    //
    //     // DON'T DO THIS this.state.persons[0].name = "Maximilian";
    //
    //     this.setState({
    //         persons: [
    //             {id: 1, name: newName, age: 28},
    //             {id: 2, name: "Manu", age: 29},
    //             {id: 3, name: "Marcin", age: 32}
    //         ]
    //     })
    // }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // IMPORTANT!!! prevents mutating original object
        const person = {
            ...this.state.persons[personIndex]
        };
        // alternative:
        // const person = Object.assign({}, this.state.persons[personIndex]);
        // DO NOT USE:
        // const person = this.state.persons[personIndex];

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
        let btnClass = 'green';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((element, index) => {
                        return <ErrorBoundry key={element.id}>
                                <Person person={element}
                                       click={this.deletePersonHandler.bind(this, index)}
                                       // click={() => this.deletePersonHandler(index)}
                                       changed={(event) => this.nameChangedHandler(event, element.id)} />
                            </ErrorBoundry>
                    })}
                </div>
            );

            btnClass = classes.red;
        }

        const pClass = [];

        if (this.state.persons.length <= 2) {
            pClass.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            pClass.push(classes.bold);
        }

        return (
            <div className={classes.app}>
                <h1>Hi, I'm React App</h1>
                <p className={pClass.join(' ')}>This is really working!</p>

                <button className={btnClass} onClick={this.togglePersonsHandler.bind(this)}>Show Persons</button>
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
