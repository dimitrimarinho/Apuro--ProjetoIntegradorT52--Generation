import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}></div>
      <Footer />
    </Router>

  );

}

export default App;
