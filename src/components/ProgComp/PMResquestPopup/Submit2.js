import React from 'react';
import { render } from "react-dom";
import Dropdown from "../../Dropdown"

class Submit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('There has been a request sent by ' + this.state.value);

      event.preventDefault();
    }  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
       
        <label>
          Projects Dropdown:     
          <select>
            <option value="ProjectA">Project A</option>
            <option value="ProjectB">Project B</option>
            <option value="ProjectC">Project C</option>
            <option value="ProjectD">Project D</option>
            <option value="ProjectE">Project E</option>
            <option value="ProjectF">Project F</option>
            <option value="ProjectG">Project G</option>
            <option value="ProjectH">Project H</option>
          </select>
        </label>
    <br/>  

        <label>
          Jan:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
        <label>
          Jan:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
         <label>
          Feb:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
        <label>
          Mar:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
        <label>
          Apr:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
        <label>
          May:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
        <label>
          Jun:
          <input
            name="numberOfHours"
            type="number" />
        </label>
    <br/>
    
        {/* <label>
          Curious Checkbox:
          <input
            name="isGoing"
            type="checkbox" />
        </label> */}

    <br/>
        <input type="submit" value="Request" />
        
 
        </form>


      );
    }
  }

  export default Submit