import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;