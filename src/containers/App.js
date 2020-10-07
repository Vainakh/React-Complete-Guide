import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import styled, { ThemeConsumer } from 'styled-components';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  state = {
    persons: [
      { id: "1", name: "Adlan", age: 43 },
      { id: "2", name: "Ellie", age: 33 },
      { id: "3", name: "Frank", age: 30},
    ],
    otherState: "some other value",
    showPersons: false
  };
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  };

nameChangeHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex((person) => {
    return person.id === id;
  });
  
  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];

  persons[personIndex] = person;

  this.setState({persons: persons});
};

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
};

  render () {

    let persons = null;
    
    if (this.state.showPersons){
      persons =  <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          /> 
    }

    return (
        <div className={classes.App}>
          <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          />
          {persons}
        </div>  
    );
  }
}


export default App;

