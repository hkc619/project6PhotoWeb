import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
