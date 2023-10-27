import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./pages/todo";
import CounterPage from "./pages/counter";
import Profile from "./pages/profile";
import Header from "./components/header/Header";
import ProductsPage from "./pages/products";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
