import React from 'react';

import ProductDetail from './ProductDetail';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'iPhone X',
          price: 65000,
          description: 'Latest from Apple',
          category: 'Mobiles',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/411SxsDFpsL._SL1024_.jpg'
        },
        {
          id: 2,
          name: 'Samsung Galaxy Note 10',
          price: 75000,
          description: 'Latest from Samsung',
          category: 'Mobiles',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71G1FCIP1EL._SL1500_.jpg'
        },
        {
          id: 3,
          name: 'Google Pixel 3',
          price: 55000,
          description: 'Latest from Google',
          category: 'Mobiles',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51GSapCrtGL._SL1000_.jpg'
        }
      ]
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Products</h2>
        {products.map(p => {
          return <ProductDetail key={p.id} product={p} />;
        })}
      </div>
    );
  }

}

export default Products;