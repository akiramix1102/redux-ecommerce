import React,{useState} from "react";
import { Row, Col ,Button, Form, FormGroup, FormLabel, FormControl} from "react-bootstrap";


const FormMain = ({  onSubmit }) => {
    const [namevalue, setNameValue] = useState('');
    const [pricevalue, setPriceValue] = useState(0);
    const [stockvalue, setStockValue] = useState(0);

    const onChangeName = (e) => {
        setNameValue(e.target.value);
    };

    const onChangePrice = (e) => {
        setPriceValue(e.target.value);
    };

    const onChangeStock = (e) => {
        setStockValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(namevalue, pricevalue, stockvalue);
        setNameValue('');
        setPriceValue(0);
        setStockValue(0)
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="row-form">
                <Col>
                    <FormGroup>
                        <FormLabel for="name">Name</FormLabel>
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
                <Col>
                    <FormGroup>
                        <FormLabel for="price">Price</FormLabel>
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
                <Col>
                    <FormGroup>
                        <FormLabel for="stock">Stock</FormLabel>
                        <FormControl
                            type="text"
                            value={stockvalue}
                            name="stock"
                            id="stock"
                            placeholder="Stock product"
                            onChange={onChangeStock}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Button className="btn-custom btn btn-success">
                            Add
          </Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form >
    );
};

export default FormMain;
