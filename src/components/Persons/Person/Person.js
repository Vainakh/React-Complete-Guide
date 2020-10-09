import React, {Component} from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
// import './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import classes from './Person.css';


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

class Person extends Component {
  render () {
    console.log("[Person.js] rendering")
    return (
    <Aux>
        <div className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!!</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          value={this.props.name} 
          onChange={this.props.changed}
        />
        </div>
    </Aux>
   )
  } 
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);