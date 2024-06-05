import React from "react";
import { useState } from "react";

function Login() {
  const [log, setLogin] = useState(false);

  const login = () => "Login Efetuado";
  const logout = () => "Logout Efetuado";

  return (
    <div>
      <p>{log ? login() : logout()}</p>
        <button onClick={()=>setLogin(!log)}>{!log? 'Login':'Logout'} </button>
    </div>
  );
}

export default Login;
