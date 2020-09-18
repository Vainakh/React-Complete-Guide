import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Adlan", age: 43 },
      { name: "Jay", age: 33 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Being beautiful and having babies with Adlan!</Person>
      </div>
    );
  }
}

export default App;
