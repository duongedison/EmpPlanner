import React from 'react';
import { render } from "react-dom";

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
          Choose the type of Skill set:
          <select>
            <option value="Programmer">Programmer</option>
            <option value="UX">UX</option>
            <option value="DataBase">DataBase</option>
          </select>
        </label>
    <br/> 

        <label>
          Choose the Grade Level:     
          <select>
            <option value="S01">S01</option>
            <option value="S02">S02</option>
            <option value="S03">S03</option>
            <option value="S04">S04</option>
            <option value="S05">S05</option>
            <option value="T01">T01</option>
            <option value="T02">T02</option>
            <option value="T03">T03</option>
            <option value="T04">T04</option>
            <option value="T05">T05</option>
            <option value="T06">T06</option>
          </select>
        </label>
    <br/>  

        <label>
            First Name:
            <input type="text" placeholder="First Name" onChange={this.handleChange} />
        </label>

        <label>
            Last Name:
            <input type="text" placeholder="Last Name"/>
        </label>
    <br/>

          
        <label>
          Request Hours:
          <input
            name="numberOfGuests"
            type="number" />
        </label>
    <br/>

        <label>
        Explain Reason:
        <textarea/>
        </label>
    <br/> 
        <label>
          Choose the type of request:
          <select>
            <option value="Vacation">Vacation</option>
            <option value="Not-Vacation">Not-Vacation</option>
          </select>
        </label>
    <br/> 
    
        <label>
          Curious Checkbox:
          <input
            name="isGoing"
            type="checkbox" />
        </label>

    <br/>
        <input type="submit" value="Submit" />
        
 
        </form>


      );
    }
  }

  export default Submit