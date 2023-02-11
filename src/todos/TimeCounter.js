import React from "react";

const TimeCounter =({timeLabel,selectedTime,timeAdd,timeLess}) => {
    return (
        <div className="time-update-container">
            <button onClick={timeAdd} className="btn-time -plus"></button>
            <label>{timeLabel}</label>
            <input value={selectedTime<10? "0"+selectedTime: selectedTime} readOnly className="input-time" type="text" />
            <button onClick={timeLess} className="btn-time -minus"></button>
        </div>
    )
}

export default TimeCounter;