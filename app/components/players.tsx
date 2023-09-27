import React from "react";

type Match = {
  p1?: string;
  p2?: string;
  winner?: "p1" | "p2";
};

const Players = ({ p1, p2, winner }: Match) => {
  return (
    <div className="flex flex-col">
      <span
        className={`player ${!p1 && "text-gray-500"}
        ${winner === "p1" ? "text-orange-500" : ""}
      `}
      >
        {p1 ? p1 : "Sin definir"}
      </span>
      <span
        className={`player ${!p2 && "text-gray-500"} ${
          winner === "p2" ? "text-orange-500" : ""
        }`}
      >
        {p2 ? p2 : "Sin definir "}
      </span>
    </div>
  );
};

export default Players;
