import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class DateRange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment( ),
      endDate: moment( )
    }
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      endDate = startDate
    }

    this.setState({ startDate, endDate })
  }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })

  render () {
    return <div className="row">
      <div className="column">
      <label> Start Date: </label>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart} 
          showMonthDropdown
          useShortMonthInDropdown
          monthsShown={2}
          shouldCloseOnSelect={false}/>


        <label> End Date: </label>
        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          showMonthDropdown
          useShortMonthInDropdown 
          monthsShown={2}
          shouldCloseOnSelect={false}/>
      </div>
    </div>
  }
}