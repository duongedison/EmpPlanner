// import React from "react";

// class ProgView extends React.Component {
    
//     constructor(){
//         super();
//         this.state = {
//             message: "PROGRAM MANAGER VIEW!"
//         };
//         this.updateMessage = this.updateMessage.bind(this);
//     }
//     updateMessage() {
//         this.setState({
//             message: "BAMMMM!!!!WOOHHHOOO YEAH!! there should some sort of employee table here and Manager can HUNT(search) and ATTACK(request) an unlucky prey(Engineer)"
//         });
//     }
//     render() {
//          return (
//            <div>
//              <h1>{this.state.message}!</h1>
//              <button onClick={this.updateMessage}>Click me!</button>
//            </div>   
//         )
//     }
// }
// export default ProgView;


import React from 'react';
import { render } from "react-dom";
import EmpList from './ProgComp/EmpList';
import ProjectList from './ProgComp/ProjectList';
import Tabs from './Tabs';
import PopUpBox from './ProgComp/PMResquestPopup/PopUpBox';


require('../styles.css');

function App() {
  return (
    <div>
<ul>
  <span><a href="/">NG</a></span>
  <span><a href="/">Logout</a></span>
</ul>
      <h1>Program Manager View</h1>
      <PopUpBox/>
      <Tabs>

        <div label="Employee List">
          <EmpList/>
        </div>
        <div label="Project View">
          <ProjectList/>
        </div>

      </Tabs>
    </div>
  );
}

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);

export default App;