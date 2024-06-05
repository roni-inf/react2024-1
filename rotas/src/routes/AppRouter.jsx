import { Route, Routes } from "react-router-dom";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import Historia from "../pages/Historia";
import Erro from "../pages/Erro";
import Fornecedor from "../pages/Fornecedor";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Empresa />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="*" element={<Erro/>}/>
      <Route path="/fornecedor/:id" element={<Fornecedor/>}/>

    </Routes>
  );
}

export default AppRouter;
