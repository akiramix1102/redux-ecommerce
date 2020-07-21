import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import img_blog_1 from '../../imgs/blog/blog2.jpeg'
import img_blog_2 from '../../imgs/blog/blog1.jpeg'
import img_blog_3 from '../../imgs/blog/blog3.jpeg'
import Banner from '../Banner-Promotion/banner_new_in'
import Footer from '../Footer'
function index() {
    return (
        <>
            <Banner />
            <Container>
                <Row className="mt-5 blog-page">
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_1} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_2} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_3} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_3} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_1} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_2} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_1} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_2} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="blog__content">
                        <div className="blog__content-img">
                            <img src={img_blog_3} alt="img-blog-2" className="img-fluid" />
                        </div>
                        <div className="blog__content-inner">
                            <div className="date-time-post">
                                <span className="date">
                                    {" "}
                                        28 <br /> June
                                </span>
                                <span className="user">
                                    <FontAwesomeIcon icon={faUser} />Admin
                                </span>
                                <span className="count-comment">
                                    <FontAwesomeIcon icon={faComment} /> 17 Comment
                                </span>
                            </div>
                            <div className="title-post">
                                <Link>Nam liber tempor </Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet conse adipisicing elit...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item >{2}</Pagination.Item>
                    <Pagination.Item >{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{9}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
            <Footer/>
        </>
    );
}

export default index;