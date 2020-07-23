import React from 'react';
import { shirtSize } from '../../../../Constant'
import './shirtSize.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
function ShirtSize() {

    const { item } = useParams();
    const dispatch = useDispatch();


    const handleChange = (e, elm) => {

        let btns = document.querySelectorAll('.size-item');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                btns.forEach(elm => elm.classList.remove('active'));
                this.classList.add('active')
            })
        })


        dispatch({
            type: 'FILTER_SIZE',
            size: elm,
            param: item
        })
    }

    return (
        <div className="shirt-size">
            <h4>Shirt Size</h4>
            <div className="list-item" id="shirt">
                {shirtSize.map((elm, index) => {
                    return (
                        <>
                            <button key={index} className="size-item" onClick={e => handleChange(e, elm)} >{elm}</button>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default ShirtSize;