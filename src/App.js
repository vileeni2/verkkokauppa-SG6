import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import HomePage from './pages/HomePage'; // Tuo HomePage-tiedosto
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carousel/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
