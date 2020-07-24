import React, { useEffect } from 'react';
import axios from "axios";
import { baseUrl } from '../Constant/index'
import { useDispatch } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import ControlForm from './ControlForm'
import { useState } from 'react';
import Form from './Form'
import Table from './Table'
import Pagination from './Pagination'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashBoard(props) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(10);
    const [sortBy, setSortBy] = useState("name");
    const [sortValue, setSortValue] = useState(1);
    const [textSearch, setTextSearch] = useState('')
    const [filterProduct, setFilterProduct] = useState([])
    const [showForm, setShowForm] = useState(false);

    //toast
    const addSucc = () => toast("Added successfully!");
    const deleteSucc = () => toast("Deleted successfully!");
    const updateSucc = () => toast("Updated successfully!");



    useEffect(() => {
        axios.get(baseUrl)
            .then(res => setProducts(res.data))
            .catch(e => console.error(e))
    }, [])

    // add product

    

    const handlePost = (name, category, oldPrice, newPrice, size) => {
        const random=Math.random()*5;
        const rating=Math.ceil(random);
        axios
            .post(baseUrl, {
                title: name,
                category: category,
                oldprice: oldPrice * 1,
                price: newPrice * 1,
                sizes: size,
                rating:rating
            })
            .then((res) => setProducts(products.concat(res.data)))
            .catch((error) => console.error(error));
        addSucc();
    };

    // const handlePost=()=>{

    // }

    // edit product
    const getDataToPut = (nameValue, priceValue, oldPrice, category, id) => {
        axios
            .put(`${baseUrl}/${id}`, {
                title: nameValue,
                price: priceValue,
                category: category,
                oldprice: oldPrice
            })
            .then((res) =>
                setProducts(
                    products.map((product) => (product.id === id ? res.data : product))
                )
            )
            .catch((error) => console.error(error));
        updateSucc();
    };

    // delete product
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Product will be delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then((result) => {
            if (result.value) {
                axios
                    .delete(`${baseUrl}/${id}`)

                    .then(() => {
                        // setProducts(products.filter(product=>product.id!==id))
                        let filterList = products.filter((product) => product.id !== id);
                        setProducts(filterList);
                        setTimeout(() => {
                            window.location.reload()
                        }, 300)
                    })
                    .catch((error) => console.error(error));
                deleteSucc();
            }
        })
    }


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


    // search
    const handleSearch = (text) => {
        setTextSearch(text);

    }

    // change pagination
    const onChangeProductPerPage = (numberProduct) => {
        setProductPerPage(numberProduct);
    };

    return (
        <section className="dashboard">
            <Container>
                <div className="text-center title">
                    <h1>
                        Product Management</h1>
                </div>
                <Row>
                    <ControlForm
                        handleSearch={handleSearch}
                        onSort={onSort}
                        onShowForm={onShowForm}
                        onChangeProductPerPage={onChangeProductPerPage}
                    />
                </Row>
                <Row>
                    <Col xs={showForm ? 4 : 0}>
                        {showForm ? <Form onSubmit={handlePost} /> : ""}
                    </Col>

                    <Col xs={showForm ? 8 : 12}>
                        <Table
                            products={currentProduct}
                            onDelete={handleDelete}
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

            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
}

export default DashBoard;