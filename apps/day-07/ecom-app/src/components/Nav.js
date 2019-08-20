import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isUserLoggedIn, clearUserInfo } from '../api/storage';

class Nav extends Component {
  state = {
    userLoggedIn: false
  }

  componentDidMount() {
    const userLoggedIn = isUserLoggedIn();
    this.setState({ userLoggedIn: userLoggedIn });
  }

  handleLogoutClick = () => {
    clearUserInfo();
    this.setState({ userLoggedIn: false });
  }

  render() {
    const { userLoggedIn } = this.state;

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
        <li className="nav-item" >
          <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink activeClassName="active" className="nav-link" to="/login" onClick={this.handleLogoutClick}>Logout</NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
