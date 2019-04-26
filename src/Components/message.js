import React, { Component } from 'react';
import Login from './login';
import Logout from './logout';

class Message extends Component {
    constructor(props){ 
        super(props);
        this.state={
            display: 0,
            status: true
         };
        
    this.upDisplay = this.upDisplay.bind(this);
    this.downDisplay = this.downDisplay.bind(this);
    }

 
    upDisplay(){
        this.setState({display:this.state.display+1});
    };
    downDisplay(){
        this.setState({display:this.state.display-1});
    }

    render(){
        let status;
        if (this.state.status === true){
            status = <Logout />
        }
        else{
            status = <Login />
        }
     return(
     <div>
        <h1> Counting {this.state.display} </h1>
        <button onClick={this.upDisplay}> UP </button> &nbsp;
        <button onClick={this.downDisplay}> Down </button>
        <p> {status} </p>
     </div>
);
 }
  }

export default Message;