import React from 'react';
import Slide from '../Slider/Slider';
import Feature from '../Feature-product'
import AllProduct from '../AllProduct'
import BannerNewIn from '../Banner-Promotion/banner_new_in'
import Deal from '../Deal'
function Home() {

    return (
        <>
            <Slide />
            <Feature />
            <BannerNewIn/>
            <AllProduct/>
            <Deal/>
        </>
    );
}

export default Home;