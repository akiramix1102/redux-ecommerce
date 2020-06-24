import React from 'react';
import Slider from "react-slick";
import slide1 from "../../imgs/slider/Ảnh-bìa-web-16.06.2020-01.jpg"
import slide2 from "../../imgs/slider/Ảnh-bìa-web-kids-16.06.2020-01.jpg"
import { Container,Row } from 'react-bootstrap';
function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container fluid className="slide">
            <Row>
            <Slider {...settings}>
                <img src={slide1} alt="banner 1" />
                <img src={slide2} alt="banner 2" />
            </Slider>
            </Row>
            
        </Container>

    );
}

export default Slide;