import { useEffect } from "react";
import { useState } from "react";

function Git() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/roni-info")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <h2>Dados</h2>
      <h2>Login:{user.login}</h2>
      <img src={user.avatar_url} alt="imagem" />
    </div>
  );
}

export default Git;
