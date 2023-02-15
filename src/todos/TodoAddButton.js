import React from "react";
import "./add-todo-btn.css";

export default class TodoAddButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <>
                <button onClick={this.props.addTodo} className="btn-todo-add"></button>
            </>
        )
    }
}