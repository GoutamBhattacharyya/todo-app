import React from "react";
import "./new-todo.css";
export default class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <div className="me-3">
                {
                    this.props.showErrorMsg && !this.props.checkFlag && 
                    <span className="error-msg">Pleas add Todo title</span>
                }
                <input
                    className="todo-input"
                    ref={this.props.todoTitleRef}
                    type="text"
                    placeholder="Add your Todo"
                    onChange={(e)=>this.props.todoTitle(e.target.value)} />
            </div>
        )
    }
}