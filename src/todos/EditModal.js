import React,{useState} from "react";
import TimeCounter from "./TimeCounter";
import TodoAddButton from "./TodoAddButton";

const EditModal=({todoListObj,editItemNo}) => {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    
    function EditTodoList () {
        alert("hi");
    }

    function hourAddition () {
        setHour((presentTime) => {
            // buttonClicked = false;
            return(presentTime < 23 ? presentTime + 1 : presentTime = 0);
        })
    }
    function hourSubtraction () {
        setHour((presentTime) => {
            return (presentTime > 0 ? presentTime - 1 : presentTime)            
        })
    }
    function minAddition () {
        setMin((presentTime) => {
            return(presentTime < 59 ? presentTime + 1 : presentTime = 0);
        })
    }
    function minSubtraction () {
        setMin((presentTime) => {
            return (presentTime > 0 ? presentTime - 1 : presentTime)            
        })
    }

    return (
        <>
            <div>
                <div className="me-3">
                {
                   todoListObj.map((obj,index) => {
                    if(index === editItemNo)
                        //console.log(obj);
                        return(
                            <div className="d-flex ">
                                <input className="todo-input" type="text" value={obj.todoTitle} />
                                <div className="d-flex">
                                    <TimeCounter
                                        timeLabel       = {"Hour"}
                                        selectedTime    = {hour}
                                        timeAdd         = {hourAddition}
                                        timeLess        = {hourSubtraction}
                                    />
                                    <span className="time-separator-line">/</span>
                                    <TimeCounter
                                        timeLabel       = {"Minute"}
                                        selectedTime    = {min}
                                        timeAdd         = {minAddition}
                                        timeLess        = {minSubtraction}
                                    /> 
                                </div>
                                <TodoAddButton
                                    cssClassName = {"btn-todo-add"}
                                    CreateTodoList = {EditTodoList}
                                />
                            </div>
                        )
                   })
                }
                </div>
            </div>
            
        </>
    )
}

export default EditModal;