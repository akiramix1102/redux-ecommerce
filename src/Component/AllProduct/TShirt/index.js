import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Row, Button } from 'react-bootstrap';
import ModalView from '../../../Modal/QuickView';
import Item from '../Item';

function TShirt() {
    const [numberShow, setNumberShow] = useState(6);
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const listProduct = useSelector(state => {
        return (
            state.items.filter(item => item.category === 't-shirt')
        )
    });

    const showMore = () => {
        if (numberShow + 3 <= listProduct.length) {
            setNumberShow(numberShow + 3)
        }
        else {
            setNumberShow(listProduct.length)
        }
    }
    const onSelectProduct = product => {
        setShow(!show);
        setData(product);
    }
    const onHide = () => {
        setShow(!show)
    }

    return (
        <>
            <Row>
                <Item number={numberShow} products={listProduct} productSelect={onSelectProduct}/>
            </Row>
            <div className="text-center show-more mt-4">
                <Button variant="outline-warning" onClick={showMore}>
                    Show More
                </Button>
            </div>
            <ModalView product={data} show={show} hide={onHide} />
        </>
    );
}

export default TShirt;