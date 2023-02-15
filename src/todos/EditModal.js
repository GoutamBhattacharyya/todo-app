import React from "react";
import TimeCounter from "./TimeCounter";
import TodoAddButton from "./TodoAddButton";

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.showModal &&
            <div>
                <div>
                    <div className="d-flex justify-content-center">
                        {
                            this.props.todoListObj.map((obj,index) => {
                                // console.log(this.props.editNumber)
                                if(index === this.props.editNumber){
                                    console.log(obj);
                                    return (
                                        <div className="d-flex" key={index}>
                                            <input className="todo-input me-3"  type="text" defaultValue={obj.todoTitle} onChange={(e)=>this.props.todoTitle(e.target.value)} />
                                            <TimeCounter
                                                selectedTime={this.props.selectedHour}
                                                timeAdd = {this.props.hourAdd}
                                                timeLess = {this.props.hourLess}                    
                                            />
                                            <span className="time-separator-line">/</span>
                                            <TimeCounter
                                                selectedTime ={this.props.selectedMin}
                                                timeAdd = {this.props.minAdd}
                                                timeLess = {this.props.minLess}                    
                                            />
                                            <TodoAddButton
                                                addTodo = {this.props.addTodo}
                                            />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}