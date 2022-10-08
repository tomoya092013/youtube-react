import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
