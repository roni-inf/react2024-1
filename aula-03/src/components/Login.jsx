import { useState } from "react";

function Login() {
  const [logar, setLogar] = useState(false);

  const login = () => "Login Efetuado com sucesso";
  const logout = () => "Você saiu do sistema";

  return (
    <div>
        <p>{logar ? login():logout()}</p>
        <button onClick={()=>setLogar(!logar)}>{logar?'Logout':'Login'} </button>
    </div>
  )
}

export default Login;
