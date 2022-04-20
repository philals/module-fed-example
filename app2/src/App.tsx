import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default function (): JSX.Element {
  // Major issue: https://github.com/originjs/vite-plugin-federation/issues/122
  // https://github.com/originjs/vite-plugin-federation/issues/161
  const [count, setCount] = React.useState(0);
  console.log("🚀 ~ file: App.tsx ~ line 3 ~ logo", logo);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React</p>
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
        >
          Learn React
        </a>
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
