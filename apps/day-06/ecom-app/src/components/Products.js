import React from 'react';
import { Link } from 'react-router-dom';

import { all } from './Categories';
import { getProducts, addProduct } from '../api/products';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedCategory: all
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  async getProducts() {
    try {
      const products = await getProducts();
      this.setState({ products });
    } catch (e) {
      console.log('Get products failed.');
      console.log('Error:', e);
    }
  }

  renderProducts(products) {
    return products.map(p => (
      <tr key={p._id}>
        <td>{p.name}</td>
        <td className="text-right">{p.price}</td>
        <td className="text-center">{p.category.name}</td>
        <td className="text-center">
          <div className="btn-group btn-group-sm">
            <Link className="btn btn-info" to={`/products/${p._id}`}>
              View
          </Link>
            <Link className="btn btn-primary" to={`/products/${p._id}/edit`} >
              Edit
          </Link>
            <a className="btn btn-warning">
              Delete
          </a>
          </div>
        </td>
      </tr>
    ));
  }

  render() {
    const { products, selectedCategory } = this.state;
    let filteredProducts = selectedCategory._id === 'all'
      ? products
      : products.filter(p => p.category._id === selectedCategory._id);

    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Products</h3>
          <hr />
          <Link to="/products/new" className="btn btn-primary">New</Link>
          <br />
          <br />
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderProducts(filteredProducts)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

export default Products;
