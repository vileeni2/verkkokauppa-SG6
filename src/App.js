import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Carousels from './components/Carousels';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';



function App() {



  return (
    <div>
      <Header />
      <p>Welcome to AmazingShoeStore</p>
       <Carousels />
      <boots/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <main>
        {/*Tuleeks tähän joskus jotain :D*/}
      <p>We aim to offer high-quality and distinctive eye-catchers.
      Our products are domestic and we strive to offer only the best.
      </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
