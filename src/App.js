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
    otherState: "some other value"
  };
  

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
        <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working!</p>
        
        <Person 
          name="Adlan" 
          age="43" >My Hobbies: Coding
        </Person>

        <Person 
          name="Loren" 
          age="33" >
        </Person>

        <Person 
          name="John"
          age="30">My Hobbies: Coding
        </Person>
      </div> 
    );
  }
}


export default App;
