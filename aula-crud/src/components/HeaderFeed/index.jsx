import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function HeaderFeed() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Projeto de Posts</h1>
        </div>

        <div className="btn-newPost">
          <Link to={"/posts"}>
            <button>Adicionar Novo Post</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderFeed;
