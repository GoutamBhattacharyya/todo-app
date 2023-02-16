import React from "react";
import TimeCounter from "./TimeCounter";
import TodoAddButton from "./TodoAddButton";

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (            
            <div className="d-flex justify-content-center h-100 ">
                {
                    this.props.todoListObj.map((obj,index) => {
                        if(index === this.props.editNumber){
                            console.log(obj);
                            return (
                                <div className="d-flex align-self-center position-relative" key={index}>
                                    {
                                        this.props.showErrorMsg && this.props.checkFlag &&
                                        <span className="error-msg">Pleas add Todo title</span>
                                    }
                                    <input ref={this.props.updateTitleRef} className="todo-input me-3"  type="text" defaultValue={obj.todoTitle} onChange={(e)=>this.props.todoTitle(e.target.value)} />
                                    <TimeCounter
                                        selectedTime    = {this.props.selectedHour}
                                        timeAdd         = {this.props.hourAdd}
                                        timeLess        = {this.props.hourLess}
                                        fieldLebel      = {this.props.hourLebel}
                                    />
                                    <span className="time-separator-line">/</span>
                                    <TimeCounter
                                        selectedTime    = {this.props.selectedMin}
                                        timeAdd         = {this.props.minAdd}
                                        timeLess        = {this.props.minLess}
                                        fieldLebel      = {this.props.minuteLebel}                   
                                    />
                                    <TodoAddButton
                                        addTodo         = {this.props.addTodo}
                                    />                                    
                                </div>
                            )
                        }
                    })
                }
                <button className="btn-close-modal" onClick={this.props.modalHide}>X</button>
            </div>
        )
    }
}