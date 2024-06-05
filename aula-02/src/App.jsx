import Git from "./components/Git";
import Login from "./components/Login";

function App() {
  const texto = {
    color: "blue",
    fontSize: "2em",
  };

  return (
    <div>
      {/* <h1 style={{ color: "red", fontSize: "3em" }}>Curso de React - 2024</h1>
      <h2 style={texto}>Aula 02 - Estilos</h2>
      <h2 className='frase'>Java Script</h2> 
      <Evento/>
      <Estados/>
      <Texto/>
      
      <Header titulo="Cálculo do IMC" />
      <div className="corpo">
        <Formulario />
      </div>
      
      <Git/>
      */}
      <Login/>
    </div>
  );
}

export default App;
