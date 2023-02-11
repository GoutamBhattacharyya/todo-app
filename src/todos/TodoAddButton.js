import React, {useState, useEffect} from "react";
import "./add-todo-btn.css";

const TodoAddButton = ({cssClassName,CreateTodoList}) => {    
    return (
        <>
            <button className={cssClassName} onClick={CreateTodoList}></button>
        </>
    )
}
export default TodoAddButton;