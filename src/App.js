import React, { useEffect } from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchApi } from './Action/action'
import './App.scss';
import { baseUrl } from './Constant'
import { Container } from 'react-bootstrap';
import Menu from './Component/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Component/Home/Home';
import Products from './Component/Products/Products'
import Cart from './Component/Cart'
import ProductDetail from './Component/ProductDetail'
import About from './Component/About'
import Blog from './Component/BlogPage'
import Contact from './Component/Contact'
import WishList from './Component/WishList/WishList';
import CheckOut from './Component/CheckOut'
import ScrollToTop from 'react-scroll-up'
import DashBoard from './Dashboard'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => dispatch(fetchApi(res.data)))
      .catch(e => console.error(e))
  }, [dispatch])

  return (

    <Router>
      <div className="wrap-all">
        <section className="header">
          <Container>
            <Menu />
          </Container>
        </section>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route  path="/products/:category/:id/:title" component={ProductDetail} />
          <Route exact path="/products/:item" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route  path="/wishlist" component={WishList} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>

        <ScrollToTop showUnder={200}
                    easing="linear"
                    duration={350}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} style={{fontSize:'32px'}}/>
        </ScrollToTop>

      </div>
    </Router>

  );
}

export default App;
