import React, {useEffect} from "react";
import "./new-todo.css";

const NewTodoForm =({setInputVal, textInput, buttonClicked}) => {

    useEffect(()=> {
        if(buttonClicked){
            setInputVal("");
        }
    },[buttonClicked])

    function readInputVal(inputVal){
        setInputVal(inputVal);
    }
    return (
        <div className="me-3">
            <input ref={textInput} className="todo-input" type="text" placeholder="Add your Todo" onChange={(e)=>readInputVal(e.target.value)} />
        </div>
    )
}

export default NewTodoForm;
