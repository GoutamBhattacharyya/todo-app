import React from "react";

const TodoListItem =({todoListObj,editTtem,deleteItem})=>{
    // console.log(todoListObj)
    return (
        <div className="todolist-inside-wrapper">
            {
                todoListObj.map((item,index)=>(
                    <div className="todo-row d-flex" key={index} id={index}>
                        <div className="d-flex todo-title">{item.todoTitle}</div>
                        <div className="d-flex todo-time">
                            {item.timeHour<10?"0"+item.timeHour:item.timeHour}:
                            {item.timeMinute<10?"0"+item.timeMinute:item.timeMinute}
                        </div>
                        <div className="d-flex todo-action">
                            <button onClick={()=>editTtem(index)}>Ed</button>
                            <button onClick={()=>deleteItem(index)}>de</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoListItem;