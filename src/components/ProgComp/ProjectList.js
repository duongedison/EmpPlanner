import React from "react";
import { render } from "react-dom";
import { makeData} from "../Utils";
import _ from 'lodash'

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
                  accessor: "firstName",
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
          pivotBy={["firstName", "lastName"]}
          defaultSorted={[
            { id: "firstName", desc: false },
            { id: "lastName", desc: true }
          ]}
          collapseOnSortingChange={false}
          filterable
          ExpanderComponent={({ isExpanded, ...rest }) =>
            isExpanded ? <span> &#10136; </span> : <span> &#10137; </span>}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "First Name",
                          accessor: "firstName"
                        },
                        {
                          Header: "Last Name",
                          id: "lastName"
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Age",
                          accessor: "age"
                        },
                        {
                          Header: "Visits",
                          accessor: "visits"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>Sub Component!</div>
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

