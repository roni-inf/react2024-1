import Aluno from "./components/Aluno";
import Carro from "./components/Carro";
import Curso from "./components/Curso";
import Exemplo from "./components/Exemplo";
import Exemplo3 from "./components/Exemplo3";
import Pessoas from "./components/Pessoas";
import Usuario from "./components/Usuario";

function App() {
  const nome = 'React';
  const elementosHTML = (
    <div>
      <h1>Hello World !</h1>
      <h2>Olá</h2>
      <h2>Data:{new Date().toLocaleDateString()}</h2>
      <h2>Hora: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  return (
    <>
      <Exemplo />
      <Pessoas />
      <Exemplo3/>
      <Curso nome={nome}/>
      <Aluno nome='Maria' idade ='17' />
      <Usuario/>
      <Carro modelo="HB20" ano={2020} />
      <Carro/>
    </>
  );
}

export default App;
