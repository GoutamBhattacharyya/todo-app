import React from "react";
import "./new-todo.css";
export default class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <div className="me-3">
                <input className="todo-input"  type="text" placeholder="Add your Todo" onChange={(e)=>this.props.todoTitle(e.target.value)} />
            </div>
        )
    }
}