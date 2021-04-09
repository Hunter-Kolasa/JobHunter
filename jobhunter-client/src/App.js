import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
