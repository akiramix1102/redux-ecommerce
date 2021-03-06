import React, { useState, useEffect } from "react";
import {
    Button,
    Modal,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Row,
    Col,
} from "react-bootstrap";

const ModalExample = (props) => {
    const { className, isOpen, toggleHide, product, getDataToPut } = props;

    const [nameValue, setNameValue] = useState(product.title)
    const [priceValue, setPriceValue] = useState(product.price)
    const [oldPriceValue, setOldPriceValue] = useState(product.oldprice)
    const [category, setCategory] = useState(product.category)


    //sync props to state in React Hooks
    useEffect(() => {
        setNameValue(product.title);
        setPriceValue(product.price);
        setOldPriceValue(product.oldprice)
        setCategory(product.category);
    }, [product.title, product.price, product.category])

    const onHideModal = () => {
        toggleHide();
    };

    const handleOnChangeName = (e) => {
        setNameValue(e.target.value)
    }

    const handleOnChangePrice = (e) => {
        setPriceValue(e.target.value * 1)
    }
    const handleOnChangeOldPrice = (e) => {
        setOldPriceValue(e.target.value * 1)
    }
    const handleOnChangeCateory = (e) => {
        setCategory(e.target.value)

    }
    const handleSubmit = (e, id) => {
        e.preventDefault();
        getDataToPut(nameValue, priceValue, oldPriceValue, category, id * 1);
        toggleHide();
        setTimeout(() => {
            window.location.reload();
        }, 300)
    }
    return (
        <div>
            <Modal show={isOpen} onHide={onHideModal} className={className}>
                <Modal.Header ><h3 className="text-center heading" style={{
                    width: '100%',
                    borderBottom: '1px solid #ccc',
                    margin:'10px 0',
                    paddingBottom:'10px',
                    fontWeight:'bold'
                }}>
                    Edit Product
                </h3></Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <FormLabel for="name">Name</FormLabel>
                                    <FormControl
                                        type="text"
                                        name="name"
                                        value={nameValue}
                                        id="name"
                                        placeholder={nameValue}
                                        onChange={handleOnChangeName}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <FormLabel for="price">New Price</FormLabel>
                                    <FormControl
                                        type="text"
                                        name="price"
                                        value={priceValue}
                                        id="price"
                                        placeholder="Price product"
                                        onChange={handleOnChangePrice}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <FormLabel for="old-price">Old Price</FormLabel>
                                    <FormControl
                                        type="text"
                                        name="price"
                                        value={oldPriceValue}
                                        id="old-price"
                                        placeholder="Price product"
                                        onChange={handleOnChangeOldPrice}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel for="stock">Category</FormLabel>
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
                        </Row>
                    </Form>
                </Modal.Body>
                <div class="modal-edit-footer"
                    style={
                        {
                            padding:'20px 1rem',
                            textAlign:'center'
                        }
                    }
                >
                    <button  type="submit" className="btn-submit" onClick={(e) => handleSubmit(e, product.id)}>
                        Save
                    </button>
                    <button className="btn-cancel" onClick={() => onHideModal(isOpen)}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalExample;
