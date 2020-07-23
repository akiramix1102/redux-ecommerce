import React from 'react';
import { jeanSize } from '../../../../Constant'
import './jeanSize.scss'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function JeanSize() {
    const {item}=useParams();
    const dispatch=useDispatch();

    const handleChange = (e, elm) => {
    
        let btns = document.querySelectorAll('.size-item');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                btns.forEach(elm => elm.classList.remove('active'));
                this.classList.add('active')
            })
        })
        
        dispatch({
            type:'FILTER_SIZE',
            size:elm*1,
            param:item
        })
    }


    return (
        <div className="jean-size">
            <h4>Jean Size</h4>
            <div className="list-item">
            {jeanSize.map((elm, index) => {
                return (
                    // <span key={index} className="size-item" onClick={e => handleChange(e)}>
                    //     {item}
                    // </span>

                    <button className="size-item" onClick={e => handleChange(e, elm)} >{elm}</button>
                )
            })}
            </div>
        </div>
    );
}

export default JeanSize;