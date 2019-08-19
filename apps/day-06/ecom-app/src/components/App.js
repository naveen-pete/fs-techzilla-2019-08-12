import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductForm from './ProductForm';
import Users from './Users';

// Function based component
const App = () => {
  return <div className="container">
    <Header />
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route path="/products/new" component={ProductForm} />
    <Route path="/users" component={Users} />
  </div>;
};

export default App;
