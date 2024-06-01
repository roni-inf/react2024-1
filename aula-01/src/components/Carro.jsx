import PropTypes from 'prop-types';
function Carro({ modelo, ano }) {
  return (
    <div>
      <p>
        {modelo}- {ano}
      </p>
    </div>
  );
}

Carro.propTypes = {
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.number,
  dataLancamento: PropTypes.instanceOf(Date),
};

Carro.defaultProps = {
    modelo: "Modelo não inserido",
    ano: 2024,
    dataLancamento: '2024-01-01'
}

export default Carro;
