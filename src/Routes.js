import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Shop from "./Pages/Shop/Shop";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
