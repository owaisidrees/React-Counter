import React, { Component } from 'react';

class TodoAppList extends Component {
    constructor(){
        super();
        this.remove = this.remove.bind(this);
    }

    remove(elem){
        var value = elem.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render(){
        var item = this.props.task.map((elem,i) =>{
                return( <li key={i}> <span>{elem}</span> <button onClick={this.remove}> X </button> </li>);
        });
        return(
            <div>
            <ul>
                {item}
            </ul> 
            </div>
        );
    }
}

export default TodoAppList;