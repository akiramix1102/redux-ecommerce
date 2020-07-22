import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal'

const FormTable = ({ products, onDelete, getDataToPut }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([])

    
    const onShowModal = (product) => {
        setIsModalOpen(!isModalOpen);
        setData(product)
    }

    const handleDelete = (id) => {
        // onDelete(id * 1);
    };

    const handleToggleHide = () => {
        setIsModalOpen(!isModalOpen)
    }
    const onGetData=(nameValue,priceValue,oldPrice,stockValue,id)=>{
        getDataToPut(nameValue,priceValue,oldPrice,stockValue,id)
    }

    // const searchProduct=products.filter(product=>{
    //     if(keyWord){
    //         return product.name.toLowerCase().indexOf(keyWord) !== -1
    //     }
    //         return products;

    // })
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => onShowModal(product)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDelete(product.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </Table>
            <Modal isOpen={isModalOpen} toggleHide={handleToggleHide} product={data} getDataToPut={onGetData}/>
        </>
    );
};

export default FormTable;
