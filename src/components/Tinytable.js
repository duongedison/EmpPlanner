import React from 'react';
import {render} from "react-dom";
import{makeData} from "./Utils";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Testset from './Testset';

class FunctionalView extends React.Component{
  state = {response: ''};
  
  constructor(){
    super();
    this.state={
    data: Testset
    };
    this.renderEditable= this.renderEditable.bind(this);
    this.populate= this.populate.bind(this)
  }
  componentDidMount(){
      this.callApi()
      .then(res=> this.setState({response:res.express}))
      .catch(err=> console.log(err));
  }
  callApi = async()=>{
      const response = await fetch('/api/hello');
      const body = await response.json();
      if(response.status!==200)throw Error(body.message);
      return body;
  };
  populate(){
    let data = this.state.response;
    this.setState({ data })
  };
  renderEditable(cInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cInfo.index][cInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cInfo.index][cInfo.column.id]
        }}
      />
    );
  }

 /*  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }

  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
      });
  }
*/

  render(){
        const { data } = this.state;
        return (
            <div className="StaffPlan">
            <h2>Welcome to the Functional Manager View</h2>
    
          <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "First name",
                },
                {
                  Header: "Last Name",
                  accessor: "Last name",
                }
              ]
            },
            {
              Header: "Info",
              columns: [

                {
                  Header: "Employee Num",
                  accessor: "EmpNo",
                  Cell:this.renderEditable
                },
                {
                  Header: "ID num",
                  accessor: "MyID",
                  Cell:this.renderEditable

                },
                {
                  Header: "Type",
                  accessor: "Type",
                  Cell:this.renderEditable
                },

                {
                  Header: "Level",
                  accessor: "Level",
                  Cell:this.renderEditable
                },

                {
                  Header: "Function Manager",
                  accessor: "FM",
                  Cell:this.renderEditable
                },
              ]
            }  
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
            </div>
        );
    }
}
export default FunctionalView;