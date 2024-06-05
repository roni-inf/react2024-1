import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    alert("executado");
  },[contador]);

  return (
    <div>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
