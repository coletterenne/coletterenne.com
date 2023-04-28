import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SchoolPage from "./components/SchoolPage";
import KindergardenPage from "./components/KindergardenPage";
import MissSniderPage from "./components/MissSniderPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="rainbow-background">
        <div
          style={{
            background: "linear-gradient(to right, red, orange)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, orange, yellow)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, yellow, green)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, green, blue)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, blue, indigo)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, indigo, violet)",
            overflow: "auto",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(to right, violet, red)",
            overflow: "auto",
          }}
        ></div>
      </div>
      <div style={{ backgroundColor: "white", opacity: 0.9 }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/school/kindergarten" element={<KindergardenPage />} />
          <Route path="/miss-sniders-prize-game" element={<MissSniderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
