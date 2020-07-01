import React from 'react';
import { Container, Row } from 'react-bootstrap'
import Filter from '../Products/Filter/Filter'
import Items from './Items/Items'
import Banner from '../Banner-Promotion/banner_new_in'
function Jean() {
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

export default Jean;