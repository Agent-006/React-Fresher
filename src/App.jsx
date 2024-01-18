import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  // let counter = 15;

  const increaseValue = () => {
    // counter += 1;
    if (counter < 20) setCounter(counter + 1);
  };

  const decreaseValue = () => {
    // counter -= 1;
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="w-full h-screen bg-zinc-800 text-white text-3xl flex flex-col items-center justify-center text-left">
      <h1 className="text-7xl font-bold p-5">Chai aut react</h1>
      <h2 className="text-5xl font-serif p-5">Counter value: {counter}</h2>

      <div>
        <button
          onClick={increaseValue}
          className="px-6 py-4 bg-zinc-500 mx-1 text-xl rounded-lg border-2 border-zinc-400 hover:border-sky-300 hover:text-sky-300 transition-all duration-500"
        >
          Increase value {counter}
        </button>
        <button
          onClick={decreaseValue}
          className="px-6 py-4 bg-zinc-500 mx-1 text-xl rounded-lg border-2 border-zinc-400 hover:border-sky-300 hover:text-sky-300 transition-all duration-500"
        >
          Decrease value {counter}
        </button>
      </div>

      <p className="p-5">footer: {counter}</p>
    </div>
  );
}

export default App;
