import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function ExemploAxiosPost() {
  const [nome, setNome] = useState("");
  const [createPost, setCreatePost] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      nome: nome,
    };

    axios
      .post("https://665fa6d55425580055b0594f.mockapi.io/alunos", newPost)
      .then((response) => {
        console.log(response.data);
        setCreatePost(response.data);
      })
      .catch(() => {
        console.error("Requisição com problemas....");
      });
    setEnviado(true);
  };

  return (
    <div className="container">
      <h1>Cadastro de Aluno</h1>
      {enviado ? (
        <div className="alert alert-primary" role="alert">
          Enviado com sucesso
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                className="my-3 form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default ExemploAxiosPost;
