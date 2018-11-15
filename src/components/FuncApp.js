import React from 'react';
import { render } from "react-dom";
import Tinytable from './FuncComp/Tinytable';
import Calview from './FuncComp/Calview';
import Tabs from './Tabs';
import PopUpBox from './FuncComp/FMResquestPopup/PopUpBox';
import Newtab from './FuncComp/Newtab';
import Dropdown from './Dropdown';
import DateEx from './DateEx';

require('../styles.css');

function App() {
  return (
    <div>
<ul>
  <span><a href="/">NG</a></span>
  <span><a href="/">Logout</a></span>
</ul>
      <h1>Funtional Manager View</h1>
      <DateEx/>
      <PopUpBox/>
      <Dropdown/>
      <Tabs>

        <div label="Employee List">
          <Tinytable/>
        </div>
        <div label="Calender View">
    
          <Calview/>
        </div>
        <div label="Test">
         <Newtab/>
        </div>
      </Tabs>
    </div>
  );
}

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);

export default App;