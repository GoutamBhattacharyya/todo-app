import React from "react";
import "./time-counter.css";

export default class TimeCounter extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="time-update-container">
                <button onClick={this.props.timeAdd} className="btn-time -plus"></button>
                <label>demo</label>
                <input readOnly value={this.props.selectedTime} className="input-time" type="text" />
                <button onClick={this.props.timeLess} className="btn-time -minus"></button>
            </div>
        )
    }
}