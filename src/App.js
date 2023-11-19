import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Carousels from './components/Carousels';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import HorizontalExample from './components/category';

function App() {



  return (
    <div>
      <Header />
      <HorizontalExample /> {/* Lisää Category tähän */}
       <Carousels />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <main>
        {/*Tuleeks tähän joskus jotain :D*/}
      <p>insert liibalaaba nönönönönönönö</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
