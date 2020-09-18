import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Adlan", age: 43 },
      { name: "Jay", age: 33 },
      { name: "David", age: 30},
    ]
  });

const [ otherState, setOtherState] = useState("Some other value...")

  console.log(personsState, otherState);
  

const switchNameHandler = () => {
  // console.log("Switch!")
  //Dont do this => this.state.persons[0].name = "Magnificent Fiasco"
  setPersonsState({
    persons: [
      { name: "Magnificent Fiasco", age: 43 },
      { name: "Jay", age: 33 },
      { name: "David", age: 30 },
    ],
    otherState: setPersonsState.otherState
  })
};

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}>My Hobbies: Coding
      </Person>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My Hobbies: Being beautiful and having babies with Adlan!
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}>My Hobbies: Coding</Person>
    </div>
  );
}


export default app;

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