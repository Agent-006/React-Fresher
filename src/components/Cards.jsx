import React, { useState } from "react";

function Cards({ val }) {
  const [a, b] = useState(val);

  const changeValue = () => {
    b(a + 1);
  };

  return (
    <div className="w-40 h-52 bg-red-600/80 rounded-3xl p-6 flex flex-col items-center justify-between">
      <h1 className="m-5 w-12 flex items-center justify-center">
        {a}
      </h1>
      <button
        className="px-7 py-3 bg-zinc-700 rounded-xl text-sm"
        onClick={changeValue}
      >
        Change
      </button>
    </div>
  );
}

export default Cards;
