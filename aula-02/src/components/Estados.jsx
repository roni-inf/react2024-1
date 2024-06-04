import { useState } from "react";

function Estados() {
    
    //let valor = 100;
    //Hook - useState
    const[valor, setValor] = useState(100);

    const[numero, setNumero] = useState(0);

    const[nome, setNome] = useState('Roni');

    //Criar um estado para incrementar um valor
    const incrementar = ()=>setNumero(numero + 1);

    function calcular(){
        //valor = valor * 2;
        setValor(valor * 2);
    }

  return (
    
    <div>
        <h1>Exemplo useStates</h1>
        <p>Resultado:{nome}</p>
        <button onClick={()=>setNome('Ana Clara')}>Mudar Nome</button>
    </div>
  )
}

export default Estados