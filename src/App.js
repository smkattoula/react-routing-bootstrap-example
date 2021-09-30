import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Mission from "./components/Mission";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/signin" component={Signin} />
      </Router>
    </div>
  );
}

export default App;
