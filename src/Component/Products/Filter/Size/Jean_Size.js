import React from 'react';
import { jeanSize } from '../../../../Constant'
import './jeanSize.scss'

function JeanSize() {

    const handleChange = (e) => {
        if(e.target.tagName=='SPAN'){
            e.target.classList.toggle('active')
        }
    }
    return (
        <div className="jean-size">
            <h4>Jean Size</h4>
            <div className="list-item">
            {jeanSize.map((item, index) => {
                return (
                    <span key={index} className="size-item" onClick={e => handleChange(e)}>
                        {item}
                    </span>
                )
            })}
            </div>
        </div>
    );
}

export default JeanSize;