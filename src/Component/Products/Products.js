import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import Filter from './Filter/Filter'
import Items from './Item/Items'
import Banner from '../Banner-Promotion/banner_new_in'
function Products() {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const handleSubmit = (min, max) => {
        setMin(min);
        setMax(max);
    }
    return (
        <>
            <Banner />
            <section className="all-products">
                <Container>
                    <Row>
                        <Filter min_max={handleSubmit} />
                        <Items Min={min} Max={max}/>
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Products;