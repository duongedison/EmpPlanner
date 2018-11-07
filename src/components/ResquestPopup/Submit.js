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
            First Name:
            <input type="text" placeholder="First Name" onChange={this.handleChange} />
        </label>

        <label>
            Last Name:
            <input type="text" placeholder="Last Name"/>
        </label>
    <br/>

          
        <label>
          Num of Days:
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