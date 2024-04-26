import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../dist/vite.svg";
import { useNavigate } from "react-router-dom";

export const TestPage = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/')
    }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={handleOnClick}>
          Go back
        </button>
        <p>
          Edit <code>src/TestPage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Count to 10 and relax</p>
    </>
  );
};
