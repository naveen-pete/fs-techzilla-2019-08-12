import React from 'react';

import Header from './Header';
import Products from './Products';

// Function based component
const App = () => {
  return <div className="container">
    <Header />
    <Products />
  </div>;
};

export default App;
