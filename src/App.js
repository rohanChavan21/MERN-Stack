import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/signin" element={<SignInPage />}  />
      </Routes>
    </Router>
  );
}
