import React from "react";
import TodoListItem from "./TodoListItem";
import "./todo-list.css";

export default class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-list-wrapper mt-2">
                <TodoListItem
                    editItem    = {this.props.editItem}
                    deleteItem  = {this.props.deleteItem}
                    todoListObj = {this.props.todoListObj}
                />
            </div>
        )
    }
}