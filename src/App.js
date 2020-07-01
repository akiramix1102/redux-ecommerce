import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchApi } from './Action/action'
import './App.scss';
import { barseUrl } from './Constant'
import { Container } from 'react-bootstrap';
import Navbar from './Component/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom'
import Home from './Component/Home/Home';
import Products from './Component/Products/Products'
import Cart from './Component/Cart'
import TShirt from './Component/Product_TShirt'
import Jean from './Component/Product_Jean'
import Short from './Component/Product_Short'
import Bag from './Component/Product_Bag'
import Glass from './Component/Product_Glass'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(barseUrl)
      .then(res => dispatch(fetchApi(res.data)))
      .catch(e => console.error(e))
  }, [dispatch])

  return (
    <Router>
      <div className="wrap-all">
        <section className="header">
          <Container>
            <Navbar />
          </Container>
        </section>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id/:title" component={Products} />
          <Route exact path="/products/t-shirt" component={TShirt} />
          <Route exact path="/products/jean" component={Jean} />
          <Route exact path="/products/short" component={Short} />
          <Route exact path="/products/glass" component={Glass} />
          <Route exact path="/products/bag" component={Bag} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
