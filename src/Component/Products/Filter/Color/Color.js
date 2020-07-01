import React from 'react';
import { color } from '../../../../Constant'

function Color() {

    const handleChange = (e) => {
        if(e.target.tagName=='SPAN'){
            e.target.classList.toggle('active')
        }
    }
    return (
        <div className="size">
            {color.map((item, index) => {
                return (
                    <span key={index} className="size-item" onClick={e => handleChange(e)}>
                        {item}
                    </span>
                )
            })}
        </div>
    );
}

export default Color;