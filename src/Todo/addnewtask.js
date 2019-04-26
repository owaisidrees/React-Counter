import React, { Component } from 'react';

class AddNewTask extends Component {
     constructor(){
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event){
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }


    render(){
        return(
            <div>
                <form onSubmit={this.justSubmitted}>
                    <input type="text"/>
                </form>
                
            </div>
        );
    }
}

export default AddNewTask;