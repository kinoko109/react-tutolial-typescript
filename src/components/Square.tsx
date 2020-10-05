import React from "react";

type SquareProps = {
  onClick: () => void;
  value: number;
}

export const Square: React.FC<SquareProps> = (props) => {
  const {onClick, value} = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
