import { useState } from "react";

function Texto() {
  const [texto, setTexto] = useState();

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <h1>Exemplo de State Input</h1>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Digite alguma coisa"
      />
      <p>Você digitou:{texto}</p>
    </div>
  );
}

export default Texto;
