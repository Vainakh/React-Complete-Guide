import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: "Adlan", age: 43 },
      { name: "Jay", age: 33 },
      { name: "David", age: 30},
    ],
    otherState: "some other value",
    showPersons: false
  };
  

switchNameHandler = (newName) => {
  this.setState({
    persons: [
      { name: newName, age: 43 },
      { name: "Jay", age: 33 },
      { name: "David", age: 30 },
    ]
  })
};

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: "Adlan", age: 43 },
      { name: event.target.value, age: 33 },
      { name: "David", age: 30 },
    ]
  })
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

    let persons = false;

    if (this.state.showPersons){
      persons = (
        <div>
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
      </div>
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