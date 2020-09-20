import React from 'react';
import './Person.css';

const Person = (props) => {
  console.log(props)
  return (
    <div className="Person">
      <p>I am Adlan and I am 43 years old!!</p>
      <p>I like coding</p>
      <input type="text" value="Some text here!"/>
    </div>
  )
};



export default Person;