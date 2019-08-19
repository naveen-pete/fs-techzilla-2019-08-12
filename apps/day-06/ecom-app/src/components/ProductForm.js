import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../api/categories';
import { addProduct } from '../api/products';

class ProductForm extends React.Component {
  state = {
    categories: [],

    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: ''
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (e) {
      console.log('Get categories failed.');
      console.log('Error:', e);
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  async addProduct(product) {
    try {
      await addProduct(product);

      this.props.history.push('/products');
    } catch (e) {
      console.log('Add product failed.');
      console.log('Error:', e);
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, description, price, imageUrl, category } = this.state;
    const product = { name, description, price, imageUrl, category };
    product.price = parseInt(product.price);

    this.addProduct(product);
  }

  render() {
    const { categories, name, description, price, imageUrl, category } = this.state;

    return (
      <div>
        <h3>Product Form</h3>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  <option value="">- Select -</option>
                  {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
              </div>
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <Link className="btn btn-warning" to="/products">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
