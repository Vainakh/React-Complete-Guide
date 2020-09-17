import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working!</p>
        <Person name="Adlan" age="43"/>
        <Person name="Jay" age="33">My Hobbies: Being beautiful and having babies with Adlan!</Person>
        <Person name="David" age="30"/>
      </div>
    );
  }
}

export default App;
