import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import DashboardLayout from "./Layouts/DashboardLayout";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          }
        />
      </Routes>
  );
}

export default App;
