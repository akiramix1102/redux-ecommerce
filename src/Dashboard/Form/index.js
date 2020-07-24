import React, { useState } from "react";
import { Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import MultiSelect from 'react-multi-select-component'

const FormMain = ({ onSubmit }) => {
    const [namevalue, setNameValue] = useState('');
    const [pricevalue, setPriceValue] = useState(0);
    const [oldPrice, setOldPrice] = useState(0)
    const [category, setCategory] = useState('T-Shirt');
    const [selectedSize, setSelectedSize] = useState([]);

    const options = [
        {
            label: 'Size S',
            value: 'S'
        },
        {
            label: 'Size M',
            value: 'M'
        },
        {
            label: 'Size L',
            value: 'L'
        },
        {
            label: 'Size XL',
            value: 'XL'
        },
        {
            label: 'Size XXL',
            value: 'XXL'
        }
    ]



    const onChangeName = (e) => {
        setNameValue(e.target.value);
    };

    const onChangePrice = (e) => {
        setPriceValue(e.target.value);
    };

    const handleOnChangeCateory = (e) => {
        setCategory(e.target.value)

    }
    const onChangeOldPrice = (e) => {
        setOldPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    

    const handleClick = () => {
        const size = selectedSize.map(elm => elm.value)
        onSubmit(namevalue, category, oldPrice, pricevalue, size);
        setNameValue('');
        setPriceValue(0);
        setOldPrice(0);
        setCategory('');
        setSelectedSize([])
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="row-form">
                <Col>
                    <FormGroup>
                        <FormLabel className="label" for="name">Name</FormLabel>
                        <FormControl
                            type="text"
                            value={namevalue}
                            name="name"
                            id="name"
                            placeholder="Name product"
                            onChange={onChangeName}
                        />
                    </FormGroup>
                </Col>

                <Col xs={12}>
                    <FormGroup>
                        <FormLabel className="label" for="stock">Category</FormLabel>
                        <Form.Control as="select" name="category" id="category" onChange={e => handleOnChangeCateory(e)}>
                            <option value="T-Shirt" selected>T-Shirt</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Polo" >Polo</option>
                            <option value="Jean">Jean</option>
                            <option value="Trouser">Trouser</option>
                            <option value="Glass">Glass</option>
                            <option value="Bag">Bag</option>
                            <option value="Short">Short</option>
                        </Form.Control>
                    </FormGroup>
                </Col>

                <Col xs={6}>
                    <FormGroup>
                        <FormLabel className="label" for="price">New Price</FormLabel>
                        <FormControl
                            type="text"
                            value={pricevalue}
                            name="price"
                            id="price"
                            placeholder="Price product"
                            onChange={onChangePrice}
                        />
                    </FormGroup>
                </Col>

                <Col xs={6}>
                    <FormGroup>
                        <FormLabel for="old-price" className="label">Old Price</FormLabel>
                        <FormControl
                            type="text"
                            value={oldPrice}
                            name="old price"
                            id="old-price"
                            placeholder="Price product"
                            onChange={onChangeOldPrice}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <FormLabel  className="label" for="size">Select Size</FormLabel>
                        <MultiSelect
                            options={options}
                            value={selectedSize}
                            onChange={setSelectedSize}
                            labelledBy={"Select"}
                            id="size"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Button className="btn-custom btn btn-success" onClick={handleClick}>
                            Add
                        </Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form >
    );
};

export default FormMain;
