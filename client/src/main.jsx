import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        
        <Route
  path="/employees"
  element={<Employees />}
/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);