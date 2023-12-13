import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import HomePage from './pages/HomePage'; 
import CategoryPage from './pages/CategoryPage'; 
import ShoppingCart from './pages/ShoppingCart'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity -= 1;
      if (updatedCart[existingItemIndex].quantity === 0) {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCart);
    }
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products/:category"
          element={<CategoryPage addToCart={addToCart} />}
        />
        <Route
          path="/shopping-cart"
          element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
