import React from 'react';
import { shirtSize } from '../../../../Constant'
import './shirtSize.scss'
function ShirtSize() {

    const handleChange = (e) => {
        if(e.target.tagName=='SPAN'){
            e.target.classList.toggle('active')
        }
    }
    return (
        <div className="shirt-size">
            <h4>Shirt Size</h4>
            <div className="list-item">
            {shirtSize.map((item, index) => {
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

export default ShirtSize;