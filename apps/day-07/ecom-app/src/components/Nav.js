import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
