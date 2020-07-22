import React from 'react';
import { shirtSize } from '../../../../Constant'
import './shirtSize.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
function ShirtSize() {

    const dispatch=useDispatch();

    const [size, setSize] = useState([])

    const handleChange = (e, item) => {
        // if (e.target.tagName === 'SPAN') {
        //     e.target.classList.toggle('active')
        // }
        if (e.target.checked) {
            setSize([...size, item])
        }
        else{
            const newSize=size.filter(i=>i!==item);
            setSize(newSize)
        }
        dispatch({
            type:'FILTER_SIZE',
            size:size
        })
    }
    
    return (
        <div className="shirt-size">
            <h4>Shirt Size</h4>
            <div className="list-item">
                {shirtSize.map((item, index) => {
                    return (
                        <>
                            <label htmlFor={item}>{item}</label>
                            <input type="checkbox" name={item} id={item} onClick={e => handleChange(e, item)} />
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default ShirtSize;