import { useEffect, useState } from "react"

function GitHub() {
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        fetch('https://api.github.com/users/roni-inf')
        .then((res)=>res.json())
        .then((json)=> setUser(json))
        .catch(()=>console.log("Recurso inválido"));
    },[])
  return (
    <div>
        <h1>Dados do usuário do github</h1>
        <h2>Login:{user.login}</h2>
        <h2>url:{user.html_url}</h2>
        <img src={user.avatar_url} alt="imagem" />
    </div>
  )
}

export default GitHub