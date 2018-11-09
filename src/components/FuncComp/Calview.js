import React from "react";
import { render } from "react-dom";
import { makeData } from "../Utils";
import Testset from '../Testset';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class smalltable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
            },
            {
              Header: "Last Name",
              accessor: "lastName",
            },
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
                Header: 'Stats',
              columns: [
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
              }
              ]

            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

render(<smalltable />, document.getElementById("root"));

export default smalltable;
