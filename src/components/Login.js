
import React from 'react';
import logo from '../download.png';

class Login extends React.Component{
    
    myInput = React.createRef();

    goToTable = (event) => {
        //1.stop the form from submmiting
        event.preventDefault();
        //2. get the text from that input
        const loginName =(this.myInput.current.value);
        //3. Change the page to /login/functional
        this.props.history.push(`/login/${loginName}`);
    };

    
    render(){
     return(
     

    
    <form className="login-selector" onSubmit={this.goToTable}>
<ul>
  <span><a href="/">NG</a></span>

  <span class="align-right"><a href="/">Logout</a></span>
</ul>

    <div class = "Container">
    
        <img src={logo} alt={"logo"}/>
    
        <span>Welcome to Staff Planner!</span>
         
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />

        <select name="status" ref={this.myInput}>
            <option value="FuncApp">Functional Manager</option>
            <option value="ProgView">Program Manager</option>
            <option value="Engineer">Engineer</option>
        /</select>
        
        <button type="submit"> Login >> </button>
        <div class="login-help">
            <a href="Register">Register</a> • <a href="Forgot">Forgot Password</a>
        </div>
    </div>
    </form>
        )
    }
}

export default Login;