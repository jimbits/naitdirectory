import React from "react";
import LandingPage from "pages/landing";
import LoginPage from "pages/login";
import SignUpPage from "pages/signup";
import PageNotFound from './pages/error/'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="directory-app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
