import { useEffect, useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto]= useState('Hello');
  const [hora, setHora]= useState(new Date());

  useEffect(()=>{
   setTimeout(()=>{
      setTexto('Serratec');
   },5000)  
  })

  useEffect(()=>{
    setInterval(()=>{
      setHora(new Date());
    },1000)
  })

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>{texto}</p>
      <p>Hora:{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
