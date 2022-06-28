import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import BlogReact from "./components/BlogReact";
import Angular from "./components/Angular";
import WildCodeSchool from "./components/WildCodeSchool";
import Autre from "./components/Autre";
import Home from "./components/Home";

function App() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((result) => setBlog(result.data));
  }, []);
  console.log(blog);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home blog={blog} />} />
        <Route path="/BlogReact" element={<BlogReact blog={blog} />} />
        <Route path="/Angular" element={<Angular blog={blog} />} />
        <Route
          path="/WildCodeSchool"
          element={<WildCodeSchool blog={blog} />}
        />
        <Route path="/Autre" element={<Autre blog={blog} />} />
      </Routes>
    </div>
  );
}

export default App;
