import React from "react";
import { Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneVolume,faEnvelope,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import './contact.scss'

function ContactInfo(props) {
    return (
        <Col lg={6} className="contact__info">
            <h2>Contact Info</h2>
            <p>
                Sorem ipsum dolor sit amet cons adipisicing elit sed do eiusmod tempor
                incididunt labore et dolore magna aliqua enimae.
            </p>
            <ul>
                <li><FontAwesomeIcon icon={faPhoneVolume}/>+003 (1234) 7894</li>
                <li><FontAwesomeIcon icon={faEnvelope}/>youremail@gmail.com</li>
                <li><FontAwesomeIcon icon={faLocationArrow}/>New Market , London</li>
            </ul>
        </Col>
    );
}

export default ContactInfo;
