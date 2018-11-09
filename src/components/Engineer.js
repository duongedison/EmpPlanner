import React from "react";

class ProgView extends React.Component {
    
    constructor(){
        super();
        this.state = {
            message: "ENGINEER VIEW!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            message: "TADAHHH!!!! BAMMMM!!!! there should some sort of table of employee list"
        });
    }
    render() {
         return (
           <div>
             <h1>{this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>
           </div>   
        )
    }
}
export default ProgView;