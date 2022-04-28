import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

declare global {
  interface Window {
    theUser: any;
  }
}

export default function (): JSX.Element {
  const [count, setCount] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  function toggleSideBar(event: any) {
    setSideBarOpen(!sideBarOpen);
  }

  useEffect(() => {
    window.addEventListener("ui-change", toggleSideBar);

    return () => {
      window.removeEventListener("ui-change", toggleSideBar);
    };
  }, []);

  console.log("🚀 ~ render", sideBarOpen);
  return (
    <div className="App">
      <h1>I am App 2</h1>
      <h2>user {JSON.stringify(window.theUser)}</h2>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>

      {sideBarOpen && (
        <div>
          <h1>Pretend that I am a side bar</h1>
          <h1>Pretend that I am a side bar</h1>
          <h1>Pretend that I am a side bar</h1>
          <h1>Pretend that I am a side bar</h1>
        </div>
      )}

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
