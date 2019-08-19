import React from 'react';

const cardStyle = { width: "18rem" };

const imageStyle = {
  height: 300, weight: 300, objectFit: "contain"
}

const ProductDetail = (props) => {
  const { name, description, price, imageUrl, category } = props.product;
  return (
    <div className="card border-secondary mb-3" style={cardStyle}>
      <img src={imageUrl} className="card-img-top" alt={name} style={imageStyle}></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item">Category: {category.name}</li>
      </ul>
    </div>
  );
};

export default ProductDetail;
