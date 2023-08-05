import React from "react";
import { createRoot } from "react-dom/client";
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">movieList</h1>
      </nav>
      <List />
    </div>
  );
};

// root Ele is the entry point of the Application
createRoot(document.getElementById("root")).render(<App />);
