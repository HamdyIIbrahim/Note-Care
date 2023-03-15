import React from "react";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Createnote from "./components/createnote";
import Login from "./components/login";
import Signup from "./components/signup";
import Slidebar from "./components/slidebar";
import EditNote from "./components/editNote";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="appContainer">
      <Slidebar />
      <Routes>
        <Route exist path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/home/:value"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/createnote"
          element={
            <ProtectedRoute>
              <Createnote />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
              <Login />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/editenode/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
