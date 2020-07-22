import React, { useState } from 'react';
import { Col, Button, Dropdown, Form } from 'react-bootstrap'
function ControlForm({ onShowForm,onSort,handleSearch }) {



    const [value, setValue] = useState('')
    const [dropdownOpen, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(true)
    const [selectValue, setSelectValue] = useState(5)
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const onHandleSearch=()=>{
        handleSearch(value);
    }

    const handleClick = (sortBy, sortValue) => {       
        onSort(sortBy, sortValue)
    }

    // const toggle = () => setOpen(!dropdownOpen);

    const handleShowForm = () => {
        setShowForm(!showForm);
        onShowForm(showForm);
    }
    const handleChangeValue = (e) => {
        // setSelectValue(e.target.value*1);
        // onChangeProductPerPage(e.target.value*1);
    }
    return (
        <>
            <Col md={2}>
                <Button color="danger" outline onClick={handleShowForm}>
                    Add Product
          </Button>
            </Col>
            <Col md={6}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="keyword"
                        value={value}
                        onChange={onChangeValue}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-outline-success" type="button" onClick={onHandleSearch}>
                            Tìm Kiếm
            </button>
                    </span>
                </div>
            </Col>
            <Col md={2}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClick('name', 1)}>Name A - Z</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClick('name', -1)}>Name Z - A</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => handleClick('price', 1)}>Price Highest - Lowest</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClick('price', -1)}>Price Lowest  - Highest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col md={2}>
                <form>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1" value={selectValue} onChange={handleChangeValue}>
                            <option value="10">10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>

                        </select>
                    </div>
                </form>
            </Col>
        </>
    );
}

export default ControlForm;