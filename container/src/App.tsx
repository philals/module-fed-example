import { Suspense } from "react";
import "./App.css";
import React from "react";
const Header = React.lazy(() => import("@mpui/Header"));
const Squad1App = React.lazy(() => import("@squad1/App"));
const Squad2App = React.lazy(() => import("@squad2/App"));
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Header />
        </Suspense>
        <Routes>
          <Route
            path="/dealing"
            element={
              <Suspense fallback={"loading..."}>
                {/* /dealing/prepare */}
                <Squad1App />
              </Suspense>
            }
          />
          <Route
            path="/survey"
            element={
              <Suspense fallback={"loading..."}>
                <Squad2App />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
