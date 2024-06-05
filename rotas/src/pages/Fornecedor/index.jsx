import { useParams } from "react-router-dom";

function Fornecedor() {
  const {id} = useParams();
  return (
    <div>
      <h1>Busca do Fornecedor com id:{id}</h1>
    </div>
  );
}

export default Fornecedor;
