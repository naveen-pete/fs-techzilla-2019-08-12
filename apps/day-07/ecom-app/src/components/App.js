import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail';
import Users from './Users';

// Function based component
const App = () => {
  return <div className="container">
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/new" component={ProductForm} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <Route path="/products/:id/edit" component={ProductForm} />
      <Route path="/users" component={Users} />
    </Switch>
  </div>;
};

export default App;
