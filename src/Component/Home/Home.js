import React from 'react';
import Slide from '../Slider/Slider';
import Feature from '../Feature-product'
import AllProduct from '../AllProduct'
import BannerNewIn from '../Banner-Promotion/banner_new_in'
import Deal from '../Deal';
import Blog from '../Blog'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
function Home() {

    return (
        <>
            <Slide />
            <Feature />
            <BannerNewIn/>
            <AllProduct/>
            <Deal/>
            <Blog/>
            <Subscribe/>
            <Footer />
        </>
    );
}

export default Home;