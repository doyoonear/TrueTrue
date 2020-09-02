import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Shop from "./Pages/Shop/Shop";
import ShopDetail from "./Pages/Shop/ShopDetail/ShopDetail";
import Login from "./Components/Nav/Login/Login";
import NewAccount from "./Pages/NewAccount/NewAccount";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/resetpw" component={ResetPassword} />
          <Route exact path="/login/register" component={NewAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/shop-detail" component={ShopDetail} />
          <Route
            exact
            path="/shop/shop-detail/:product"
            component={ShopDetail}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
