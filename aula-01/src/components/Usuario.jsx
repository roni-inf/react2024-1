import Filho from "./Filho";

function Usuario() {
  const usuarios = [
    { nome: "Roni", email: "roni@gmail.com" },
    { nome: "Adriana", email: "a@gmail.com" },
    { nome: "Sergio", email: "s@gmail.com" },
  ];

  return (

    <Filho usuarios={usuarios}/>
  )
}

export default Usuario;
