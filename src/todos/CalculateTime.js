// import React, { useEffect, useState } from "react";
// import "./time-counter.css";
// import TimeCounter from "./TimeCounter";
// const CalculateTime = ({setPresentTime, buttonClicked}) => {
//     const [hour, setHour] = useState(0);
//     const [min, setMin] = useState(0);
//     useEffect(()=>{
//         setPresentTime({"minute": min, "hour": hour});
//     },[min,hour])
//     useEffect(()=> {
//         if(buttonClicked){
//             setHour(0)
//             setMin(0)
//         }
//     },[buttonClicked])
    
//     function hourAddition () {
//         setHour((presentTime) => {
//             buttonClicked = false;
//             return(presentTime < 23 ? presentTime + 1 : presentTime = 0);
//         })
//     }
//     function hourSubtraction () {
//         setHour((presentTime) => {
//             return (presentTime > 0 ? presentTime - 1 : presentTime)            
//         })
//     }
//     function minAddition () {
//         setMin((presentTime) => {
//             return(presentTime < 59 ? presentTime + 1 : presentTime = 0);
//         })
//     }
//     function minSubtraction () {
//         setMin((presentTime) => {
//             return (presentTime > 0 ? presentTime - 1 : presentTime)            
//         })
//     }
//     return (
//             <div className="d-flex">
//                 <TimeCounter
//                     timeLabel       = {"Hour"}
//                     selectedTime    = {hour}
//                     timeAdd         = {hourAddition}
//                     timeLess        = {hourSubtraction}
//                 />
//                 <span className="time-separator-line">/</span>
//                 <TimeCounter
//                     timeLabel       = {"Minute"}
//                     selectedTime    = {min}
//                     timeAdd         = {minAddition}
//                     timeLess        = {minSubtraction}
//                 /> 
//             </div>
//         )

//         // <div className="d-flex">
//         //     <div className="time-update-container">
//         //         <button onClick={hourAddition} className="btn-time -plus"></button>
//         //         <label>Hour</label>
//         //         <input value={hour<10? "0"+hour: hour} readOnly className="input-time" type="text" />
//         //         <button onClick={hourSubtraction} className="btn-time -minus"></button>
//         //     </div>
//         //     >
//         //     <div className="time-update-container">
//         //         <button onClick={minAddition} className="btn-time -plus"></button>
//         //         <label>Minute</label>
//         //         <input value={min<10? "0"+min: min} readOnly className="input-time" type="text" />
//         //         <button onClick={minSubtraction} className="btn-time -minus"></button>
//         //     </div>
//         // </div>
//     // )
// }

// export default CalculateTime;

import React from "react";
import "./time-counter.css";
import TimeCounter from "./TimeCounter";

export default class CalculateTime extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <div className="d-flex">                
                <TimeCounter
                    todoHour={this.props.todoHour}
                    hourAddition = {this.props.hourAddition}
                    hourSubtraction = {this.props.hourSubtraction}                    
                />
                <span className="time-separator-line">/</span>
                <TimeCounter
                    todoMinute = {this.props.todoMinute}
                    minuteAddtion = {this.props.minuteAddtion}
                    minuteSubtraction = {this.props.minuteSubtraction}
                />
            </div>
        )
    }
}