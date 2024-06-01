
export default function Aluno({nome,idade}) {
  return (
    <div>
        <p>Nome:{nome}</p>
        {idade > 18 ? 'Maior de idade' || idade < 18 :'menor de idade'}
       
    </div>
  )
}
