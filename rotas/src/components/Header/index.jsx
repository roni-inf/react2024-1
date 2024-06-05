import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
      <h2>Empresa XPTO</h2>
      <div className="menu">
        <Link to={"/"}>Empresa</Link>
        <Link to={"/historia"}>História</Link>
        <Link to={"/contato"}>Contato</Link>
        <Link to={"/sobre"}>Sobre</Link>
      </div>
    </header>
  );
}

export default Header;
