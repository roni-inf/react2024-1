import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function ExemploAxios() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get("https://665fa6d55425580055b0594f.mockapi.io/alunos")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => console.error("Erro ao fazer a requisição"));
  }, []);

  return (
    <div>
      <h1>Listagem de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExemploAxios;
