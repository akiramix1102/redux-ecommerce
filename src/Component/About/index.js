import React from "react";
import Banner from "../Banner-Promotion/banner_new_in";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../imgs/about1.jpeg";
import teamate_1 from "../../imgs/team/team1.jpeg";
import teamate_2 from "../../imgs/team/team2.jpeg";
import teamate_3 from "../../imgs/team/team3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTelegram,
    faGooglePlus,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import Helmet from 'react-helmet';

function index() {
    return (
        <>
        <Helmet>
            <title>
                About Us
            </title>
        </Helmet>
            <Banner />
            <Container>
                <Row className="about mt-5">
                    <Col xs={12} className="about__img">
                        <img src={banner} alt="banner" className="img-fluid" />
                    </Col>
                    <Col lg={4} className="about__text-left">
                        <p>
                            Sorem ipsum dolor sit amet coadi piscing elit sed ut hoc
                            iudicaremus non esse in iis partem maximam positam beate.
            </p>
                    </Col>
                    <Col lg={8} className="about__text-right">
                        <p>
                            Sorem ipsum dolor sit amet consectetur adipiscing elit sed ut hoc
                            iudicaremus non esse in iis partem maximam positam beate aut secus
                            vivendi. Hic Pomponius quidem, inquam, noster iocari videtur, et
                            fortasse suo iure. Illud non continuaeque incontentae. Et ais, si
                            una littera commota sit, fore tota ut labet disciplina. Venit ad
                            extremum; Quod non faceret, si in voluptate summum bonum poneret.
                            is it Reges constructio interrete. Quis est tam dissimile homini.
                            Immo istud quidem, inquam, quo loco quidque, nisi iniquum postulo,
                            arbitratu meo. Sic enim censent,
            </p>
                    </Col>
                    <Col md={4} className="about__teamate">
                        <div className="about__teamate-img">
                            <img src={teamate_1} alt="teamate 1" className="img-fluid" />
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTelegram} />
                                <FontAwesomeIcon icon={faGooglePlus} />
                            </div>
                        </div>
                        <div className="about__teamate-name">
                            <h5>MICHEL JHON</h5>
                            <span>CEO & FOUNDER</span>
                        </div>
                    </Col>
                    <Col md={4} className="about__teamate">
                        <div className="about__teamate-img">
                            <img src={teamate_2} alt="teamate 2" className="img-fluid" />
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTelegram} />
                                <FontAwesomeIcon icon={faGooglePlus} />
                            </div>
                        </div>
                        <div className="about__teamate-name">
                            <h5>ANGLE BURI</h5>
                            <span>CEO & FOUNDER</span>
                        </div>
                    </Col>
                    <Col md={4} className="about__teamate">
                        <div className="about__teamate-img">
                            <img src={teamate_3} alt="teamate 3" className="img-fluid" />
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTelegram} />
                                <FontAwesomeIcon icon={faGooglePlus} />
                            </div>
                        </div>
                        <div className="about__teamate-name">
                            <h5>MICHEL JONATHAN</h5>
                            <span>CEO & FOUNDER</span>
                        </div>
                    </Col>

                    <Col md={6} className="about__what-do">
                        <h3>What We Do</h3>
                        <p>
                            Sorem ipsum dolor sit amet consectetur adipiscing elit siudic
                            aremus, non esse in iis partem maximam positam beate aut secus
                            vivendi. Hic ego: Pomponius quidem, inquam, noster iocari videtur,
                            et fortasse suo iure. Illud non continuo, ut aeque incontentae. Et
                            ais, si una commotau sit, fore tota ut labet disciplina enit ad
                            extremum Quod non
                        </p>
                    </Col>
                    <Col md={6} className="about__what-do">
                        <h3>Why Choose Us</h3>
                        <p>
                            Sorem ipsum dolor sit amet consectetur adipiscing elit siudic
                            aremus, non esse in iis partem maximam positam beate aut secus
                            vivendi. Hic ego: Pomponius quidem, inquam, noster iocari videtur,
                            et fortasse suo iure. Illud non continuo, ut aeque incontentae. Et
                            ais, si una commotau sit, fore tota ut labet disciplina enit ad
                            extremum Quod non
                        </p>
                    </Col>
                </Row>
            </Container>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default index;
