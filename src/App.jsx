import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="min-h-screen grid place-content-center">
      <div className="bg-emerald-500 w-52 h-52 grid place-content-center">
        <div className="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
          <div className="bg-red-500 w-16 h-16 rounded-full"></div>
          <h1>Hello</h1>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
