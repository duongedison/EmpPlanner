import React from 'react';
import { render } from "react-dom";
import Router from './components/Router';

// require('./styles.css');

// function App() {
//   return (
//     <div>
//       <h1>Funtional Manager View</h1>
//       <Tabs>

//         <div label="Employee List">
//           <Tinytable/>
//         </div>
//         <div label="Calender View">
    
//           <Calview/>
//         </div>
//         <div label="Empty">
         
//         </div>
//       </Tabs>
//     </div>
//   );
// }

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);

render(<Router />, document.getElementById('root'));