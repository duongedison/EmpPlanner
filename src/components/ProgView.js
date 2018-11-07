import React from "react";

class ProgView extends React.Component {
    
    constructor(){
        super();
        this.state = {
            message: "PROGRAM MANAGER VIEW!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            message: "BAMMMM!!!!WOOHHHOOO YEAH!! there should some sort of employee table here and Manager can HUNT(search) and ATTACK(request) an unlucky prey(Engineer)"
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