import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import CadastrarProdutos from './components/produto/cadastrarProdutos/CadastrarProdutos';
import ListaCategoria from './components/categoria/listarCategoria/ListaCategoria';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import ListaProduto from './components/produto/listaProduto/ListaProduto';
import CadastroUsuario from './pages/cadastroUsuario/cadastroUsuario';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import SobreNos from './pages/sobrenos/SobreNos';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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
            <Route path="/cadastrar-categoria/:id" element={<CadastroCategoria />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/listaProduto" element={<ListaProduto />} />
            <Route path="/listaProduto/:id" element={<ListaProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/cadastrarProduto" element={<CadastrarProdutos />} />
            <Route path="/cadastrarProduto/:id" element={<CadastrarProdutos />} />
            <Route
              path="/*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;