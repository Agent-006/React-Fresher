import React from "react";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 text-white text-3xl flex flex-col items-center justify-center text-left">
      <h1 className="bg-zinc-950 p-4 rounded-2xl mb-4 font-semibold">
        Tailwind CSS
      </h1>
      <div className="flex">
        <Cards username="Angilina" btnText="Click Me" />
        <Cards username="Gorginia" btnText="Visit Me" />
      </div>
    </div>
  );
}

export default App;
