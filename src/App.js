import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { id: "1", name: "Adlan", age: 43 },
      { id: "2", name: "Jay", age: 33 },
      { id: "3", name: "David", age: 30},
    ],
    otherState: "some other value",
    showPersons: false
  };
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  };

// switchNameHandler = (newName) => {
//   this.setState({
//     persons: [
//       { name: newName, age: 43 },
//       { name: "Jay", age: 33 },
//       { name: "David", age: 30 },
//     ]
//   })
// };

nameChangeHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex((person) => {
    return person.id === id;
  });
  //const person = Object.assign({}, this.state.persons[personIndex]);
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
        /* <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>My Hobbies: Coding
          </Person>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "MagnificentFiasco")}
            changed={this.nameChangeHandler}>My Hobbies: Being beautiful and having babies with Adlan!
            
          </Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>My Hobbies: Coding
          </Person>
      </div> */
      )
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>   
    );
  }
}


export default App;

// state = {
//   persons: [
//     { name: "Adlan", age: 43 },
//     { name: "Jay", age: 33 },
//     { name: "David", age: 30},
//   ],
//   otherState: "Some other value"
// }

// switchNameHandler = () => {
//   // console.log("Switch!")
//   //Dont do this => this.state.persons[0].name = "Magnificent Fiasco"
//   this.setState({
//     persons: [
//       { name: "Magnificent Fiasco", age: 43 },
//       { name: "Jay", age: 33 },
//       { name: "David", age: 30 },
//     ]
//   })
// };