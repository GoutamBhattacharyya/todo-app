import React from 'react';
import './app.css';
import {hot} from 'react-hot-loader';
import ToDo from './todos/ToDo';

const App=()=> {
    return(
        <div className="container App h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className='col-6 position-relative'><ToDo /></div>
            </div>
        </div>
    )
}

export default hot(module) (App);