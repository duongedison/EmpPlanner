import React from "react";
import { render } from "react-dom";
import { makeData} from "../Utils";
import _ from 'lodash'
import Dropdown from "../Dropdown";
import Submit2 from "./PMResquestPopup/Submit2"

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Projects",
              columns: [
                {
                  Header: "Project Name",
                  accessor: "projName",
                  PivotValue: ({ value }) =>
                    <span style={{ color: "darkred" }}>
                      {value}
                    </span>
                },
                {
                  Header: "Engineers on the project",
                  id: "lastName",
                  accessor: d => d.lastName,
                  PivotValue: ({ value }) =>
                    <span style={{ color: "darkblue" }}>
                      {value}
                    </span>,
                  Footer: () =>
                    <div style={{ textAlign: "center" }}>
                    </div>
                }
              ]
            },
            {
              pivot: true,
              Header: () =>
                <strong>Overridden Pivot Column Header Group</strong>
            },
            {
              expander: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          pivotBy={["projName", "lastName"]}
          defaultSorted={[
            { id: "projName", desc: false },
            { id: "lastName", desc: true }
          ]}
          collapseOnSortingChange={false}
          filterable
          ExpanderComponent={({ isExpanded, ...rest }) =>
            isExpanded ? <span> &#10136; </span> : <span> &#10137; </span>}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                {/* <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br /> */}
                <ReactTable
                  data={data}
                  columns={[
                    {
                        Header: "Jan",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },
                    {
                        Header: "Feb",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },
                    {
                        Header: "Mar",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },
                    {
                        Header: "April",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },{
                        Header: "May",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },
                    {
                        Header: "June",
                        accessor: "Month",
                        Cell:this.renderEditable
                    },
                    {
                      Header: "Hour Availibility",
                      accessor: "ProjectsCompleted",
                      
                      Cell:row =>(
                        <div 
                          style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#dadada',
                          }}
                        >
                        <div 
                          style={{
                            width: `${row.value}%`,
                            height: '100%',
                            backgroundColor: row.value >80 ?'#85cc00'
                                :row.value > 50 ? '#ffbf00'
                                :'#ff2e00',
                                borderRadius:'2px',
                                transition: 'all .2s eas-out'
                          }}
                          />
                        </div>
                      )  
                      
                    },
                  ]}
                  defaultPageSize={1}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}><Submit2/></div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
        <br />
 
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
export default App;

