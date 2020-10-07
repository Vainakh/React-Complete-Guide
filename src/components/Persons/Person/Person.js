import React from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
// import './Person.css';
import classes from './Person.css'


// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//       width: 450px;
//   }
// `

const Person = (props) => {
  return (
   
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  )
};



export default Person;