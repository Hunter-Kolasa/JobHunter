import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
// import Login from "./components/Login";
import List from "./components/List";
import { fetchAllJobs } from "./actions/fetchAllJobs"
import { fetchSavedJobs } from "./actions/fetchSavedJobs"
import SavedList from "./components/SavedList";

class App extends Component {

  componentDidMount() {
    this.props.fetchSavedJobs()
    this.props.fetchAllJobs()
  }
  render() {
    if (this.props.loading) {
      return <h3>Loading...</h3>
    }
    return (
      <Router>
        <Nav />
        <SavedList />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/jobs" component={List} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllJobs: () => dispatch(fetchAllJobs()),
    fetchSavedJobs: () => dispatch(fetchSavedJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
