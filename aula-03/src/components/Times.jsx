import React from "react";

function Times() {
  const times = [
    "Flamengo",
    "Botafogo",
    "Fluminense",
    "Bangu",
    "Vasco",
    "América",
  ];

  return (
    <div>
      {times.length === 0 ? (
        <p>Não há times disponiveis</p>
      ) : (
        times.map((item) => (
          <p key={i}>
            {i + 1}: {item}
          </p>
        ))
      )}
    </div>
  );
}

export default Times;
