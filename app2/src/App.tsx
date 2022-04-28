import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

declare global {
  interface Window {
    theUser: any;
  }
}

export default function (): JSX.Element {
  const [count, setCount] = useState(0);

  console.log("🚀 ~ file: App.tsx ~ line 33 ~ window.theUser", window.theUser);
  return (
    <div className="App">
      <h1>I am App 2</h1>
      <h2>user {JSON.stringify(window.theUser)}</h2>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>

      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  );
}
