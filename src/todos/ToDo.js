import React from "react";
import NewTodoForm from "./NewTodoForm";
import TimeCounter from "./TimeCounter";
import TodoAddButton from "./TodoAddButton";
import TodoList from "./TodoList";
import EditModal from "./EditModal";
import "./edit-modal.css"

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle: "",
            todoHour: 0,
            todoMinute: 0,
            updatedHour: 0,
            updatedMinute: 0,
            todoListObj: [],
            editNumber: 0,
            showList : false,
            showModal: false,
            checkFlag: false,
            showErrorMsg: false,
        }
        this.todoTitleRef = React.createRef();
        this.updateTitleRef = React.createRef();
        this.readInputVal = this.readInputVal.bind(this);
        this.hourAddition = this.hourAddition.bind(this);
        this.hourSubtraction = this.hourSubtraction.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.modalHide = this.modalHide.bind(this);
    }

    addTodo = (e) => {
        e.preventDefault();
        if(this.state.todoTitle != "") {
            this.state.showList = true;
            const todoTitle= this.state.todoTitle;
            const todoHour=this.state.todoHour;
            const todoMinut= this.state.todoMinute;
            const obj ={
                "todoTitle": todoTitle,
                "todoHour": todoHour,
                "todoMinut": todoMinut,
            }
            this.setState({todoListObj:[...this.state.todoListObj,obj]})
            this.setState({todoTitle:""});
            this.setState({todoHour:0});
            this.setState({todoMinute:0});
            this.todoTitleRef.current.value="";
        }else {
            this.setState({showErrorMsg:true})
        }
    }


    updateTodo = (e) => {
        e.preventDefault();
        if(this.updateTitleRef.current.value !=0) {
            this.setState({checkFlag:false});
            const obj ={
                "todoTitle": this.updateTitleRef.current.value,
                "todoHour": this.state.updatedHour,
                "todoMinut": this.state.updatedMinute,
            }
            this.setState({
                todoListObj: [
                    ...this.state.todoListObj.slice(0, this.state.editNumber),
                    obj,
                    ...this.state.todoListObj.slice(this.state.editNumber+1),
                ]
            })
            this.setState({showModal:false});
            this.setState({todoTitle:""});
            this.updateTitleRef.current.value ===""? this.setState({showErrorMsg:true}):this.setState({showErrorMsg:false})
        }else {
            this.setState({showErrorMsg:true})
        }
    }


    readInputVal = (targetVal) => {
        this.setState({todoTitle:targetVal})
        this.setState({showErrorMsg:false})
    }


    hourAddition = () => {
        !this.state.checkFlag? this.setState({todoHour: this.state.todoHour !=23? this.state.todoHour +1 : 0})
        :this.setState({updatedHour: this.state.updatedHour !=23? this.state.updatedHour +1 : 0})
    }


    hourSubtraction = () => {
        !this.state.checkFlag? this.setState({todoHour: this.state.todoHour != 0? this.state.todoHour -1 : 23})
        :this.setState({updatedHour: this.state.updatedHour != 0? this.state.updatedHour -1 : 23})
    }


    minuteAddition = () => {
        !this.state.checkFlag?this.setState({todoMinute: this.state.todoMinute !=59? this.state.todoMinute + 1 : 0})
        :this.setState({updatedMinute: this.state.updatedMinute !=59? this.state.updatedMinute + 1 : 0})
    }


    minuteSubtarction = () => {
        !this.state.checkFlag?this.setState({todoMinute: this.state.todoMinute !=0? this.state.todoMinute - 1 : 59})
        :this.setState({updatedMinute: this.state.updatedMinute !=0? this.state.updatedMinute - 1 : 59})
    }


    deleteItem = (id) => {
        for (let i=0; i<this.state.todoListObj.length; i++){
                if(i==id){
                    this.state.todoListObj.splice(i,1);
                }
            }
        localStorage.setItem('todoListObj', JSON.stringify(this.state.todoListObj));
        const modJSON = JSON.parse(localStorage.getItem('todoListObj'));
        this.setState({todoListObj:modJSON});
        this.setState({showErrorMsg:false})
    }


    editItem = (id) => {
        let clickedHourVal=0;
        let clickedMinVal=0;
        this.setState({editNumber:id});
        this.setState({showModal:true});
        this.setState({checkFlag:true});
        this.state.todoListObj.map((obj,index) => {
            if(index === id){
                clickedHourVal = obj.todoHour
                clickedMinVal = obj.todoMinut
            }
        })
        this.setState({updatedHour: clickedHourVal})
        this.setState({updatedMinute: clickedMinVal})
        this.setState({showErrorMsg:false})
    }

    modalHide = () => {
        this.setState({showModal:false});
        this.setState({checkFlag:false});
    }


    componentDidMount(){
        if(localStorage.getItem('todoListObj') !=null){
            const todoListObj= JSON.parse(localStorage.getItem('todoListObj'));
            this.setState({todoListObj:todoListObj});
        }
    }


    componentDidUpdate(){
        localStorage.setItem('todoListObj', JSON.stringify(this.state.todoListObj));
    }

    render () {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <NewTodoForm
                        todoTitle       = {this.readInputVal}
                        showErrorMsg    = {this.state.showErrorMsg}
                        todoTitleRef    = {this.todoTitleRef}
                        checkFlag       = {this.state.checkFlag}
                    />
                    <TimeCounter
                        selectedTime    = {this.state.todoHour}
                        fieldLebel      = {"Hour"}
                        timeAdd         = {this.hourAddition}
                        timeLess        = {this.hourSubtraction}
                    />
                    <span className="time-separator-line">/</span>
                    <TimeCounter
                        selectedTime    = {this.state.todoMinute}
                        fieldLebel      = {"Minute"}
                        timeAdd         = {this.minuteAddition}
                        timeLess        = {this.minuteSubtarction}
                    />
                    <TodoAddButton
                        addTodo = {this.addTodo}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <TodoList
                        todoListObj     = {this.state.todoListObj}
                        deleteItem      = {this.deleteItem}
                        editItem        = {this.editItem}
                        showList        = {this.state.showList}
                    />
                </div>
                {
                    this.state.showModal &&
                        <div className="edit-modal">
                            <EditModal
                                todoTitle       = {this.readInputVal}
                                todoListObj     = {this.state.todoListObj}
                                editNumber      = {this.state.editNumber}
                                showModal       = {this.state.showModal}
                                selectedHour    = {this.state.updatedHour}
                                selectedMin     = {this.state.updatedMinute}
                                hourAdd         = {this.hourAddition}
                                hourLess        = {this.hourSubtraction}
                                minAdd          = {this.minuteAddition}
                                minLess         = {this.minuteSubtarction}
                                addTodo         = {this.updateTodo}
                                hourLebel       = {"Hour"}
                                minuteLebel     = {"Minute"}
                                updateTitleRef  = {this.updateTitleRef}
                                showErrorMsg    = {this.state.showErrorMsg}
                                checkFlag       = {this.state.checkFlag}
                                modalHide       = {this.modalHide}
                            />
                        </div>
                }
            </>
        )
    }
}