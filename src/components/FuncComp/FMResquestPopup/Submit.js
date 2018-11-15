import React from 'react';
import { render } from "react-dom";
import DateEx from "../../DateEx";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('There has been a request sent by ' + this.state.firstname + ' ' + this.state.lastname);
  }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <DateEx/>
        
        <label>
            First Name:
            <input type="text" name='firstname' placeholder="First Name" onChange={this.handleChange} value = {this.state.firstname} />
        </label>

        <label>
            Last Name:
            <input type="text" name='lastname' placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname} />
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