import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

function More() {
  const [ler, setLer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://665fa6d55425580055b0594f.mockapi.io/posts/${id}`)
      .then((response) => {
        setLer(response.data);
        console.log(ler.titulo);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{ler.titulo}</h2>
            </header>
            <div className="line" />
            <p>{ler.conteudo}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default More;
