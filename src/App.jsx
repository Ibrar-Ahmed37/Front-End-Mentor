import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { QRCodeApp } from "./components/qrcodeApp/QRCodeApp";
import { useEffect, useState } from "react";
import { HomePage } from "./components/homePage/HomePage";
import { TodoApp } from "./components/todoApp/TodoApp";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/qrcodeApp" element={<QRCodeApp />} />
          <Route path="/todoApp" element={<TodoApp/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
