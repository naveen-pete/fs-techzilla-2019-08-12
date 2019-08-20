import React from 'react';

import { getCategories } from '../api/categories';

export const all = { _id: 'all', name: 'All' };

class Categories extends React.Component {
  state = {
    categories: [],
    selectedCategory: all
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    try {
      const categories = await getCategories();
      this.setState({ categories: [all, ...categories] });
    } catch (e) {
      console.log('Get categories failed.');
      console.log('Error:', e);
    }
  }

  handleButtonClick = category => {
    this.setState({ selectedCategory: category });
    this.props.onCategorySelect(category);
  }

  render() {
    const { categories, selectedCategory } = this.state;

    return <div className="list-group">
      {categories.map(c => {
        const className = c._id === selectedCategory._id
          ? 'list-group-item list-group-item-action active'
          : 'list-group-item list-group-item-action'
        return (
          <button
            type="button"
            key={c._id}
            className={className}
            onClick={() => this.handleButtonClick(c)}
          >
            {c.name}
          </button>
        );
      })}
    </div>
  }
}

export default Categories;
