/* eslint-disable */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import EsnNavBar from "./components/EsnNavBar";
import EsnFooter from "./components/EsnFooter";

import Main from "./containers/Main/Main";
import Board from "./containers/Board/Board";
import About from "./containers/About/About";
import Page from "./containers/Page/Page";

import api from "./api";

class App extends Component {
  state = {}; // FIXME

  render() {
    return (
      <div className="App">
        <EsnNavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/about" component={About} />

          <Route path="/" component={Page} />
        </Switch>
        <EsnFooter />
      </div>
    );
  }
}

api.getMenuItems();
api.getAboutPage();
api.getBoards();
api.getPages();

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
