
function Filho(props) {
    const vetor = props.usuarios;
  return (
    <div>
        <h2>Vetor de usuários</h2>
        <ul>
             {vetor.map( ( usuario)=>(
                 <li key={usuario.nome}>{usuario.nome} - {usuario.email}</li>
             ))}   

        </ul>

    </div>
  )
}

export default Filho