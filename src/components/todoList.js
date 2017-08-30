import React, { Component } from 'react';
import store from '../store/index.js'
class TodoList extends Component {
    constructor(){
        super();
        this.state={

        }
    }
del(index){
    this.props.delTodo(index)
}
    render() {
        console.log(this.props.List);
        store.subscribe(() =>
  this.setState(store.getState())
)

        return (
            <div>
             <ul>
            <h1>Todo List</h1>
                {this.props.List.map((data,index)=>(
                    <li key={index}>
                      <h3> {data.item}<button onClick={this.del.bind(this,index)}>Delete</button></h3> 
                      
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}
export default TodoList;
