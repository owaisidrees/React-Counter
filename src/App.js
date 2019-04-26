import React, { Component } from 'react';
import './App.css';
import Message from './Components/message';
import Main from './Todo/main';

class App extends Component {
  render() {
     var taskList = ["Task 1" , "Task 2" , "Task 3"];

     var task = localStorage.getItem('storedTask');
     if(task){
        taskList = JSON.parse(task);
     }
    return (
      <div>
          <Message />
          <Main  task = {taskList}/>
      </div>
    );
  }
} 

export default App;
