import React, { Component } from 'react';
import AddNewTask from './addnewtask';
import TodoAppList from './todoapplist';

class Main extends Component {
     constructor(props){
        super();
        this.state ={task: props.task};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text){
        var updatedTask =  this.state.task;
        updatedTask.push(text);
        this.setState({task:updatedTask});
        this.updateLockStorage(updatedTask);
    }

    removeTask(text){
        var updatedTask =  this.state.task;
        updatedTask.splice(updatedTask.indexOf(text), 1);
        this.setState({task:updatedTask});
        this.updateLockStorage(updatedTask);
    }

    updateLockStorage(updatedTask){
        // console.log('Task Updated');
        localStorage.setItem('storedTask' , JSON.stringify(updatedTask));

    }

    render(){
        return(
            <div>
                <h1> Todo App </h1>
                <AddNewTask updateList ={this.updateList} />
                <TodoAppList  task={this.state.task} remove ={this.removeTask} />
            </div>
        );
    }
}

export default Main;