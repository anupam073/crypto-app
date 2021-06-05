import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoinsTable from './components/CoinsTable';
import React from 'react';


function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <CoinsTable />
    </div>
  );
}

export default App;
