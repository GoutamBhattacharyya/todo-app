import React from "react";
import TodoListItem from './TodoListItem';
import "./todo-list.css";

const TodoList =({todoListObj,editTtem,deleteItem}) => {
    return(
        <div className="todo-list-wrapper mt-2">
            <TodoListItem editTtem = {editTtem} deleteItem = {deleteItem} todoListObj={todoListObj} />
        </div>
    )
}
export default TodoList;