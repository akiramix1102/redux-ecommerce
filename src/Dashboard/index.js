import React, { useEffect } from 'react';
import axios from "axios";
import { barseUrl } from '../Constant/index'
import { useDispatch } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import ControlForm from './ControlForm'
import { useState } from 'react';
import Form from './Form'
import Table from './Table'
import Pagination from './Pagination'

function DashBoard(props) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(10);
    const [sortBy, setSortBy] = useState("name");
    const [sortValue, setSortValue] = useState(1);
    const [textSearch, setTextSearch] = useState('')
    const [filterProduct, setFilterProduct] = useState([])

    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        axios.get(barseUrl)
            .then(res => setProducts(res.data))
            .catch(e => console.error(e))
    }, [])

    // edit product
    const getDataToPut = (nameValue, priceValue,oldPrice, category, id) => {
        axios
            .put(`${barseUrl}/${id}`, {
                title: nameValue,
                price: priceValue,
                category: category,
                oldprice:oldPrice
            })
            .then((res) =>
                setProducts(
                    products.map((product) => (product.id === id ? res.data : product))
                )
            )
            .catch((error) => console.error(error));
    };



    // pagination
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const paginate = (number) => {
        setCurrentPage(number);
    };

    // show form add product
    const onShowForm = (formStatus) => {
        setShowForm(formStatus);
    };

    // sort
    const onSort = (by, value) => {
        setSortBy(by);
        setSortValue(value);

        if (by === "name") {
            products.sort((a, b) => {
                if (value === -1) {
                    return b.title.localeCompare(a.title)
                }
                return a.title.localeCompare(b.title)
            });
        } else {
            products.sort((a, b) => {
                if (a.price > b.price) return -value;
                else if (a.price < b.price) return value;
                else return 0;
            });
        }
    };


    //add product
    const handleSubmit = () => {

    }

    // search
    const handleSearch = (text) => {
        setTextSearch(text);

    }

    return (
        <>
            <Container>
                <div className="text-center title">
                    <h1>Quản Lý Sản Phẩm</h1>
                </div>
                <Row>
                    <ControlForm
                        handleSearch={handleSearch}
                        onSort={onSort}
                        onShowForm={onShowForm}
                    // onChangeProductPerPage={onChangeProductPerPage}
                    />
                </Row>
                <Row>
                    <Col xs={showForm ? 4 : 12}>
                        {showForm ? <Form onSubmit={handleSubmit} /> : ""}
                    </Col>

                    <Col xs={showForm ? 8 : 12}>
                        <Table
                            products={currentProduct}
                            // onDelete={handleDelete}
                            getDataToPut={getDataToPut}
                        />
                    </Col>

                    <Col xs={12}>
                        <Pagination
                            productPerPage={productPerPage}
                            totalProduct={products.length}
                            paginate={paginate}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashBoard;