import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Lidos from "./pages/Lidos/Lidos";
import MinhaColecao from "./pages/MinhaColecao/MinhaColecao";
import ParaLer from "./pages/ParaLer/ParaLer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lidos" element={<Lidos />} />
        <Route path="/minhacolecao" element={<MinhaColecao/>} />
        <Route path="/paraler" element={<ParaLer/>} />
      </Routes>
    </Router>
  );
};

export default App;
