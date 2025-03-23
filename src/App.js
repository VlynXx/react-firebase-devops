import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Home";
import AuthorDetails from "./AuthorDetails";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-5">
        {" "}
        {/* Ubah margin-top */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/authordetails" component={AuthorDetails} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
