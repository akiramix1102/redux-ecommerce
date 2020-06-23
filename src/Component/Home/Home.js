import React from 'react';
import Slide from '../Slider/Slider';
import Feature from '../Feature-product'
import { useSelector } from 'react-redux';

function Home() {

    return (
        <>
            <Slide />
            <Feature />
        </>
    );
}

export default Home;