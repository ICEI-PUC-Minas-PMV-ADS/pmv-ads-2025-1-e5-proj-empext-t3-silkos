import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import CadastrarPage from "./components/CadastrarPage/CadastrarPage";
import NovaSenhaPage from "./components/NovaSenhaPage/NovaSenhaPage";
import EsqueceuSenhaPage from "./components/EsqueceuSenhaPage/EsqueceuSenhaPage";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Cadastro" element={<CadastrarPage />} />
              <Route path="/EsqueceuSenha" element={<EsqueceuSenhaPage />} />
              <Route path="/NovaSenha" element={<NovaSenhaPage />} />
          </Routes>
      </Router>
  );
}

export default App
