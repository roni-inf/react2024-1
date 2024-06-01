function Pessoas() {

    const pessoas ={
        nome:"Antônio",
        idade:40
    }

    //const soma = (a,b) => a +b;

    function soma(a,b){
        return a + b;
    }

  return (
    <div>
        <h1>Olá ! {pessoas.nome}</h1>
        <h2>Resultado: {soma(100,50)} </h2>
    </div>
  )
}

export default Pessoas;