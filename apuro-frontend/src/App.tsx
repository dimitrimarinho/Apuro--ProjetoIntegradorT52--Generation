import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/cadastroUsuario';
import SobreNos from './pages/sobrenos/SobreNos';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import ListaCategoria from './components/categoria/listarCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/cadastrar-categoria" element={<CadastroCategoria />} />
            <Route path="/categorias" element={<ListaCategoria/>}/>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;