import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./pages/todo";
import CounterPage from "./pages/counter";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
