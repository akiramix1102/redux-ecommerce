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
import Product from './Component/Products/Products'

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
          <Route exact path="/products" component={Product} />
          <Route exact path="/products" component={Product} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
