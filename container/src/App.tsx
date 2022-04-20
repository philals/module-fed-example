import { Suspense } from "react";
import "./App.css";
import React from "react";
const Header = React.lazy(() => import("@mpui/Header"));
const Squad1App = React.lazy(() => import("@squad1/App"));
const Squad2App = React.lazy(() => import("@squad2/App"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <Header />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <Squad1App />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <Squad2App />
      </Suspense>
    </div>
  );
}

export default App;
