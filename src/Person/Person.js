import React from 'react';

const Person = (props) => {
  console.log(props)
  return (
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  )
};



export default Person;