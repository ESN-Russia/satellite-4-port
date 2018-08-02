/* eslint-disable */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import EsnNavBar from "./components/EsnNavBar";
import EsnFooter from "./components/EsnFooter";

import Main from "./containers/Main/Main";

class App extends Component {
  state = {}; // FIXME

  render() {
    return (
      <div className="App">
        <EsnNavBar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <EsnFooter />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
