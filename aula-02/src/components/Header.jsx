import './Header.css';

function Header(props) {
  return (
    <header>
        <h3>{props.titulo}</h3>
    </header>
    )
}

export default Header