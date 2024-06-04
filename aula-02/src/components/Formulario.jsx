import { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resposta, setResposta] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResposta(peso / altura ** 2);
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="peso">Peso</label>
        <input
          type="number"
          required
          value={peso}
          id="peso"
          onChange={(e) => setPeso(e.target.value)}
        />

        <label htmlFor="altura">Altura</label>
        <input
          type="number"
          required
          value={altura}
          id="altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <label>Resultado:{resposta.toFixed(2)}</label>
        <button className="botao">Calcular</button>
      </form>
    </div>
  );
}

export default Formulario;
