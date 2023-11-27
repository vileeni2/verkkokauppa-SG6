import React from 'react';
import Carousels from '../components/Carousels';
import '../components/HomePage.css';

function HomePage() {
  return (
    <div className='MainPage'>
      <p>Welcome to AmazingShoeStore</p>
      <div className='CarouselsContainer'>
        <Carousels />
      
      <main>
        {/* Tuleeks tähän joskus jotain :D */}
        <p>We aim to offer high-quality and distinctive eye-catchers.
          Our products are domestic and we strive to offer only the best.
        </p>
      </main>
      </div>
    </div>
  );
}

export default HomePage;
