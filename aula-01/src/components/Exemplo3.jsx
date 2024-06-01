function Exemplo3() {
  const nomes = ["Ana", "Carlos", "Marcos", "Igor", "Felipe"];
  const filtrar = nomes.filter((nome) => nome.length > 5);

  return (
    <div>
      <h1>Listagem de Nomes</h1>
      <h2>vetor original: {nomes.join(",")}</h2>
      <h2>Filtro:{filtrar.join(";")}</h2>
    </div>
  );
}

export default Exemplo3;
