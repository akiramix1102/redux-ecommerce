import React from 'react';
import { Col,Tab,Tabs } from 'react-bootstrap';
import Description from './Description'
import Detail from './Detail'
import './description.scss'
function index(props) {
    return (
        <Col lg={12} className="des" >
            <Tabs defaultActiveKey="des" id="uncontrolled-tab-example" className="wrapper-left">
                <Tab eventKey="des" title="Description" className="des__item">
                    <Description />
                </Tab>
                <Tab eventKey="detail" title="Detail" className="des__item">
                    <Detail />
                </Tab>
            </Tabs>
        </Col>
    );
}

export default index;