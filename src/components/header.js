import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from '../pages/login';

const Header = (props) => {
  const navigate = useNavigate();

  const goToShoppingCart = () => {
    navigate('/shopping-cart');
  };

  return (
    <header className="header-container">
      <h1>AMAZING SHOE STORE</h1>
      <div className="HomBtn">
        <Link to="/">
          <button type='button'>Return</button>
        </Link>
      </div>
      <div className="shopping-cart">
        <button type='button' onClick={goToShoppingCart}>
          Ostoskori ({props.cartItems.length})
        </button>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#ff3232'}}>
          Login / Register here!
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Login/>
        </div>
      </div>
    </header>
  );
};

export default Header;

