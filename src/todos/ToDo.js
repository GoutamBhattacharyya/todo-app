import React, { useEffect, useRef, useState } from "react";
import CalculateTime from "./CalculateTime";
import NewTodoForm from "./NewTodoForm";
import TodoAddButton from "./TodoAddButton";
import TodoList from "./TodoList";
import EditModal from "./EditModal";


export const ToDo=() => {
    const [inputVal, setInputVal] = useState("");
    const [presentTime, setPresentTime] = useState([]);
    const [todoListObj, setTodoListObj] = useState([]);
    const [editItemNo, setEditItemno] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);    
    const textInput = useRef();
    
    useEffect(()=> {
        const todoListObjs= JSON.parse(localStorage.getItem('todoListObj'));
        if(todoListObjs) {
            setTodoListObj(todoListObjs);
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('todoListObj', JSON.stringify(todoListObj));
    },[todoListObj])

    useEffect(()=>{
        setButtonClicked(false);
    },[buttonClicked])

    function CreateTodoList(){
        if(inputVal!=""){
            let aa = todoListObj.length;
            setTodoListObj([...todoListObj, {
                    ...todoListObj,
                    id:aa+1,
                    todoTitle: inputVal,
                    timeHour: presentTime.hour,
                    timeMinute: presentTime.minute
            }])
            textInput.current.value="";
            setButtonClicked(true);
        }else{
            alert("Add your todo name")
        }
    }

    function deleteItem(id) {
        for (let i=0; i<todoListObj.length; i++){
            if(i==id){
                todoListObj.splice(i,1);                
            }
        }
        localStorage.setItem('todoListObj', JSON.stringify(todoListObj));
        const modJSON = JSON.parse(localStorage.getItem('todoListObj'));
        setTodoListObj(modJSON);        
    }

    function editTtem(id) {
        setEditItemno(id);
    }
   
    return (
        <>
            <div className="d-flex justify-content-center">
                <NewTodoForm
                    textInput = {textInput}
                    setInputVal = {setInputVal}
                    buttonClicked = {buttonClicked}
                />
                <CalculateTime
                    buttonClicked = {buttonClicked}
                    setPresentTime = {setPresentTime}
                />
                <TodoAddButton
                    cssClassName = {"btn-todo-add"}
                    CreateTodoList = {CreateTodoList}
                />            
            </div>
            <div className="d-flex justify-content-center">
                <TodoList
                    todoListObj = {todoListObj}
                    deleteItem = {deleteItem}
                    editTtem = {editTtem}
                />
            </div>
            <EditModal
                todoListObj = {todoListObj}
                editItemNo = {editItemNo}
            />
        </>
    )
}