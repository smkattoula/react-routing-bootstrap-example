import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mission from "./components/Mission";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Mission />
      <Signin />
    </div>
  );
}

export default App;
