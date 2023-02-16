import React from "react";

export default class TodoListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            this.props.showList !=false &&
            <div className="todolist-inside-wrapper">
                {
                    this.props.todoListObj.map((item,index)=>(
                        <div className="todo-row d-flex" key={index} id={index}>
                            <div className="d-flex todo-title">{item.todoTitle}</div>
                            <div className="d-flex todo-time pt-1">
                                {item.timeHour<10?"0"+item.timeHour:item.todoHour}:
                                {item.timeMinute<10?"0"+item.timeMinute:item.todoMinut}
                            </div>
                            <div className="d-flex todo-action ms-auto align-items-center mt-1">
                                <button className="btn-edit" onClick={()=>this.props.editItem(index)} />
                                <button className="btn-delete" onClick={()=>this.props.deleteItem(index)} />
                            </div>
                        </div>
                    ))
                }
        </div>
        )
    }
}