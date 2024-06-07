import { Link } from "react-router-dom";
import "./style.css";
import HeaderFeed from "../../components/HeaderFeed";
function Feed() {
  return (
    <div>
      <HeaderFeed />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Consumindo uma API</h2>
            </header>
            <div className="line" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptates, saepe vitae cupiditate tempore dolores id
              exercitationem modi aperiam harum. Suscipit quod non tenetur
              ratione obcaecati voluptatem impedit? Impedit, repellendus.
            </p>
            <div className="btns">
              <div className="btn-edit">
                <Link to={"/update"}>
                  <button>Editar</button>
                </Link>
              </div>

              <div className="btn-readmore">
                <Link to={"/more"}>
                  <button>Ler mais</button>
                </Link>
              </div>

              <div className="btn-delete">
                <button>Apagar</button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
