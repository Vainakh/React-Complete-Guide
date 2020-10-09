import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import styled, { ThemeConsumer } from 'styled-components';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
  };

  state = {
    persons: [
      { id: "1", name: "Adlan", age: 43 },
      { id: "2", name: "Ellie", age: 33 },
      { id: "3", name: "Frank", age: 30},
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props)
    return state;
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

// componentWillMount(){
//   console.log("[App.js] componentWillMount")
// }

componentDidMount() {
  console.log("[App.js] componentDidMount");
}

shouldComponentUpdate() {
  console.log("[App.js] componentShouldUpdate");
  return true;
}

componentDidUpdate() {
  console.log("[App.js] componentDidUpdate");
}

nameChangeHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex((person) => {
    return person.id === id;
  });
  
  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];

  persons[personIndex] = person;

  this.setState((prevState, props) => {
    return {persons: persons, changeCounter: this.state.changeCounter + 1};
  });
};

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
};

  render () {
    console.log("[App.js] render")
    let persons = null;
    
    if (this.state.showPersons){
      persons =  <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          /> 
          
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showCockpit: false})
          }}

          >Remove Cockpit</button>
            { this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            subtitle={this.props.appSubTitle}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}  />
            : null}
          
            {persons}
        </Aux>  
    );
  }
}


export default withClass(App, classes.App);

