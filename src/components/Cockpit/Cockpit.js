import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");


    setTimeout(() =>{
      alert("saved data to cloud!");
    }, 1000);
    return (() => {
      console.log("[Cockpit.js] cleanup work in useEffect")
    })
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2 useEffect");
    return (() => {
      console.log("[Cockpit.js] cleanup work in 2 useEffect")
    })
  })

  let btnClass = classes.Green;


  if (props.showPersons){
    btnClass = classes.Red;
  }

  const assignedClasses = [];

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p  className={assignedClasses.join(" ")}>This is really working!</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);