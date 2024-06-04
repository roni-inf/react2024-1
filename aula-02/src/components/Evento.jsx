function Evento() {

    const handleClick = () =>{
        alert('Clicou no Botão');
    }

  return (
    <div>
        <h1>Exemplo de Evento</h1>
        <button onClick={handleClick}>Evento de Click</button>
        <button onClick={()=>alert('Clicou no botão 2')}>Evento de Click 2</button>
        
    </div>
  )
}

export default Evento;