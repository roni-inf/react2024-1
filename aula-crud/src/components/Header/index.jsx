import Back from "../../assets/back-button.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <img src={Back} alt="seta" style={{ width: "50px" }} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
