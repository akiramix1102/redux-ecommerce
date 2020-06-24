import React from 'react';
import Slide from '../Slider/Slider';
import Feature from '../Feature-product'
import AllProduct from '../AllProduct'
import Banner_new_in from '../Banner-Promotion/banner_new_in'
function Home() {

    return (
        <>
            <Slide />
            <Feature />
            <Banner_new_in />
            <AllProduct/>
        </>
    );
}

export default Home;