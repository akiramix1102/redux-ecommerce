import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import img_blog_1 from '../../imgs/blog/blog2.jpeg'

function index() {
    return (
        <section className="blog">
            <Container>
                <Row>
                    <Col className="blog__heading text-center">
                        <span className="blog__heading-orange">Our Latest</span>
                        <span className="blog__heading-blue"> Blog</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="blog__content">
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
                                <Link>My Top 3 Favorite Things About Cody</Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quaerat possimus distinctio vitae aliquid consequatur iusto
                                    perferendis animi eaque dolor!...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>

                    <Col md={6} className="blog__content">
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
                                <Link>My Top 3 Favorite Things About Cody</Link>
                            </div>
                            <div className="preview-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quaerat possimus distinctio vitae aliquid consequatur iusto
                                    perferendis animi eaque dolor!...
                                </p>
                            </div>
                            <Link to="" className="read-more">
                                Read More &rarr;
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default index;
