import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselComponent from './components/components/carousel/CarouselComponent';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <CarouselComponent /> {/* Teste do CaroulselComponente (visualizar na tela) */}
      <div style={{ minHeight: '100vh' }}></div>
      <Footer />
    </Router>
  );
}

export default App;