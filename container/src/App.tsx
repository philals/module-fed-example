import React, { useEffect } from "react";
import { Suspense } from "react";
import "./App.css";
const Header = React.lazy(() => import("@mpui/Header"));
const Squad1App = React.lazy(() => import("@squad1/App"));
const Squad2App = React.lazy(() => import("@squad2/App"));
import { BrowserRouter, Routes, Route } from "react-router-dom";

declare global {
  interface Window {
    theUser: any;
  }
}

function App() {
  const [user, setUser] = React.useState(window.theUser); // Replace with a hook which syncs with window or something

  const handleUserChange = (event: any) => {
    setUser(window.theUser);
  };

  useEffect(() => {
    // just here to re-render
    window.addEventListener("userChange", handleUserChange);

    return () => {
      window.removeEventListener("userChange", handleUserChange);
    };
  }, [user]);

  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Header />
        </Suspense>
        {window.theUser && (
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={"loading..."}>
                  <>
                    <h1>Home is a composition of two apps</h1>
                    <Squad1App />
                    <Squad2App />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/dealing"
              element={
                <Suspense fallback={"loading..."}>
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
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
