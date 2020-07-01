import React from 'react';
import { Container, Row } from 'react-bootstrap'
import Filter from './Filter/Filter'
import Items from './Item/Items'
import Slide from '../Slider/Slider'
import Banner from '../Banner-Promotion/banner_new_in'
function Products() {
    return (
        <>
            <Banner />
            <section className="all-products">
                <Container>
                    <Row>
                        <Filter />
                        <Items />
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Products;