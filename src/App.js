import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAuth from "./components/LayoutAuth/LayoutAuth";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
