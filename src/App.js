import React from "react";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Createnote from "./components/createnote";
import Login from "./components/login";
import Signup from "./components/signup";
import Slidebar from "./components/slidebar";
import EditNote from "./components/editNote";

function App() {
  return (
    <div className="appContainer">
      <Slidebar />
      <Routes>
        <Route exist path="/" element={<Home />}></Route>
        <Route path="/createnote" element={<Createnote />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/editenode/:id" element={<EditNote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
