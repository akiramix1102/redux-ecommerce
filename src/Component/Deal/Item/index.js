import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, } from '@fortawesome/free-regular-svg-icons'
import Slider from "react-slick";

function Item() {

    const listProductsDeal = useSelector(state => state.items.filter(item => item.deal === true))

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    // render rating
    const showRating = rating => {
        let result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStar} key={i} />)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStarReg} key={i} />)
        }
        return result;
    }

    const calculateTimeLeft = () => {

        const date=+new Date();
        const difference = +new Date("2020-07-14") - date;

       
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        else{
            
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(

            <div className="time-count">
                {timeLeft[interval]} <span>{interval}</span>
            </div>

        );
    });


    return (
        <>
            <Slider {...settings}>
                {listProductsDeal.map(product => {
                    return (
                        <Row key={product.id} className="d-flex">
                            <Col md={5} className="deal__img">
                                <img src={product.images} alt={product.title} className="img-fluid" />
                            </Col>
                            <Col md={7} className="deal__info">
                                <div className="deal__info-title">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <ul className="rating">
                                        <li>
                                            {showRating(product.rating)}
                                        </li>
                                    </ul>
                                    <ul className="price-action">
                                        <li>&#36;{product.price}.00
                                        </li>
                                        <li><a className="btn-buy">Add to cart</a></li>
                                    </ul>
                                    <div className="time-count-deal">
                                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )
                })}
            </Slider>
        </>
    );
}

export default Item;