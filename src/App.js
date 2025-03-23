import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Home";
import AuthorDetails from "./AuthorDetails";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-5"> {/* Ubah margin-top */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/authordetails" element={<AuthorDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
