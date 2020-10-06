import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import './App.css';
import styled, { ThemeConsumer } from 'styled-components';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';


// const StyledButton = styled.button`
//   background-color: ${(props) => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
          {/* {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })} */}
        </div>
      );


      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
       <div>
        <div className="App">
          <h1>Hello World!</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button 
            // style={style}
            className="button"
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div> 
       </div>  
    );
  }
}


export default App;
