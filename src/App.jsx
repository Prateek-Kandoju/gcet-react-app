import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>My React Store By Prateek</h1><hr></hr>
        </header>

        <main>
             <h2>Products List</h2><hr></hr>
        </main>

        <footer>
          <p>&copy;2025, All Rights Reserved</p>

        </footer>
      </div>
    </>
  );
}

export default App;