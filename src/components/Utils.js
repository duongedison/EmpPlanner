
import React from "react";
import namor from "namor";
import {Link, RichText, Date} from 'prismic-reactjs';
import Moment from "moment";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// const timestamp = Date(document.data.event_date);
// const formattedDate = Moment(timestamp).format("lll");
// // Outputs as "Feb 17, 2017 1:30 PM"

const newEmployee = () => {
    const statusChance = Math.random();
    return {
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      hours: Math.floor(Math.random() * 20),
      ProjectsCompleted: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      Month: (Math.floor(Math.random() * 100))/100,
      // Date: formattedDate,
      
      
      status:
        statusChance > 0.66
          ? "Working" 
          : statusChance > 0.33 ? "Vacation" : "Off Project"
    };
  };
  
  /*export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;


  export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
*/

  export function makeData(len = 5553) {
    return range(len).map(d => {
      return {
        ...newEmployee(),
        children: range(10).map(newEmployee)
      };
    });
  }