import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import ImgProduct from './ImgProduct'
import Content from './DetailContent'
import Description from './Description'
import RelatedProduct from './Ralated'
import Banner from '../Banner-Promotion/banner_new_in'
import Footer from '../Footer'


function ProuctDetail() {
    const { id,title } = useParams();
    console.log(title);
    let products = useSelector(state => {
        if (title) {
            return state.items.filter(product => product.title === title);
        }
        return state.items
    })

    useEffect(()=>{
        window.scroll({
            top:200,
            behavior:'smooth'
        })
    })
    
    return (
        <>
            <Banner/>
            <Container className="mt-5">
                <Row>
                    <ImgProduct products={products} />
                    <Content products={products} />
                    <Description/>
                    <RelatedProduct/>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default ProuctDetail;