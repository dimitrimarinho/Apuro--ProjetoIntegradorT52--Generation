import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SobreNos from './pages/sobrenos/SobreNos';

function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;