import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import { Col, Form } from 'react-bootstrap'
import Pagination from '../../Pagination'
import './Item.scss'
function Item({ Min, Max }) {

    const { item } = useParams();

    const [min, setMin] = useState(Min)
    const [max, setMax] = useState(Max)

    useEffect(() => {
        setMin(Min)
        setMax(Max)
    }, [Min, Max])


    let listProducts = useSelector(state => {

        // const products = state.items.filter(product => product.category === item);
        // const result = products.filter(elm => elm.price >= state.filterPrice[0] && elm.price <= state.filterPrice[1])
        // return result;

        if (item === 'Polo' || item === 'T-Shirt' || item === 'Shirt') {
            
            // const products = state.items.filter(product => product.category === item);
            // const result = products.filter(elm => elm.price >= state.filterPrice[0] && elm.price <= state.filterPrice[1])
            switch (state.filterSize) {
                case 'S':
                    const productSizeS = state.items.filter(product => product.category === item)
                    return productSizeS.filter(item => item.sizes.includes('S'))

                case 'M':
                    const productSizeM = state.items.filter(product => product.category === item)
                    return productSizeM.filter(item => item.sizes.includes('M'))

                case 'L':
                    const productSizeL = state.items.filter(product => product.category === item)
                    return productSizeL.filter(item => item.sizes.includes('L'))

                case 'XL':
                    const productSizeXl = state.items.filter(product => product.category === item)
                    return productSizeXl.filter(item => item.sizes.includes('XL'))

                case 'XXL':
                    const productSizeXxl = state.items.filter(product => product.category === item)
                    return productSizeXxl.filter(item => item.sizes.includes('XXL'))

                default:
                    return state.items.filter(product => product.category === item);
            }
        }

        if (item === 'Jean' || item === 'Short' || item === 'Trouser') {
            switch (state.filterSize) {
                case 28:
                    const productSizeS = state.items.filter(product => product.category === item)
                    return productSizeS.filter(item => item.sizes.includes(28))

                case 29:
                    const productSizeM = state.items.filter(product => product.category === item)
                    return productSizeM.filter(item => item.sizes.includes(29))

                case 30:
                    const productSizeL = state.items.filter(product => product.category === item)
                    return productSizeL.filter(item => item.sizes.includes(30))

                case 31:
                    const productSizeXl = state.items.filter(product => product.category === item)
                    return productSizeXl.filter(item => item.sizes.includes(31))

                case 32:
                    const productSizeXxl = state.items.filter(product => product.category === item)
                    return productSizeXxl.filter(item => item.sizes.includes(32))

                default:
                    return state.items.filter(product => product.category === item);
            }
        }

        if (!item) {
            return state.items
        }
        else {
            return state.items.filter(product => product.category === item);
        }
        
        

    })





    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(9);

    const paginate = (number) => {
        setCurrentPage(number);
    };



    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = listProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );


    const dispatch = useDispatch();

    // const [image,setImage]=useState('')


    // render star rating
    const showRating = rating => {
        let result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStar} key={i} />)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStarReg} key={i} />)
        }
        return result;
    }
    const addToCart = id => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })
    }

    const onMouseOver = (e, product) => {
        // e.currentTarget.src=product.smallImg[0];

    }


    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "2") {
            dispatch({
                type: "SORT_PRICE_ASC",
                item
            })
        }
        else if (value === "-2") {
            dispatch({
                type: "SORT_PRICE_DES",
                item
            })
        }
        else if (value === "1") {
            dispatch({
                type: "SORT_NAME_ASC",
                item
            })
        }
        else if (value === "-1") {
            dispatch({
                type: "SORT_NAME_DES",
                item
            })
        }

    }

    const addToWishlist = id => {
        dispatch({
            type: 'ADD_TO_WISH_LIST',
            id
        })
    }


    return (
        <>
            <Col md={12}>
                <Form className="form">
                    <Form.Group className="form__sort">
                        <Form.Label>Sort By</Form.Label>
                        <Form.Control as="select" onChange={e => handleChange(e)}>
                            <option value="1" >Name A - Z</option>
                            <option value="-1">Name Z - A</option>
                            <option value="2">Price Low - High</option>
                            <option value="-2">Price High - Low</option>
                        </Form.Control>
                    </Form.Group>
                    <span className="product-lenght">of {listProducts.length} products</span>
                </Form>
            </Col>


            {currentProduct.map(product => {
                return (
                    <Col md={4} className="text-center" key={product.id}>
                        <div className="wrapper-product">
                            <Link to={`/products/${product.category}/${product.id}/${product.title}`} className="wrapper-product__img">
                                <img src={product.images} alt={product.title} className="img-fluid" onMouseOver={(e) => onMouseOver(e, product)} />
                            </Link>
                            <div className="wrapper-product__info">
                                <div className="wrapper-product__info-text">
                                    <Link to="" className="title">
                                        {product.title}
                                    </Link>
                                    <ul className="rating">
                                        <li>
                                            {showRating(product.rating)}
                                        </li>
                                    </ul>
                                    <h4 className="price">
                                        &#36;{product.price}.00
                                    <del className="price__old">&#36;{product.oldprice}.00</del>
                                    </h4>
                                </div>
                                <div className="wrapper-product__info-action">
                                    <a className="btn-buy" onClick={() => addToCart(product.id)}>Add to cart</a>
                                    <div className="feature-icon">
                                        <a onClick={() => addToWishlist(product.id)}><FontAwesomeIcon icon={faHeartReg} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}

            <Col md={12}>
                <Pagination
                    productPerPage={productPerPage}
                    totalProduct={listProducts.length}
                    paginate={paginate}
                />
            </Col>
        </>
    );
}

export default Item;