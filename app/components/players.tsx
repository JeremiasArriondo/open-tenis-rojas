import React from "react";

type Match = {
  p1?: string;
  p2?: string;
};

const Players = ({ p1, p2 }: Match) => {
  return (
    <div className="flex flex-col">
      <span className="player">{p1 ? p1 : "No disponible"}</span>
      <span className="player">{p2 ? p2 : "No disponible"}</span>
    </div>
  );
};

export default Players;
