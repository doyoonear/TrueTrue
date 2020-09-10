import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainP from "./Pages/Main/MainP";
import Shop from "./Pages/Shop/Shop";
import ShopDetail from "./Pages/Shop/ShopDetail/ShopDetail";
import Login from "./Components/Nav/Login/Login";
import NewAccount from "./Pages/NewAccount/NewAccount";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Nav from "./Components/Nav/Nav";
import ProductCard from "./Components/ProductCard/ProductCard";
import ShopList from "./Pages/Shop/ShopList/ShopList";
import Search from "./Components/Nav/Search/Search";
import SearchResult from "./Components/Nav/Search/SearchResult";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/resetpw" component={ResetPassword} />
          <Route exact path="/productcard" component={ProductCard} />
          <Route exact path="/login/register" component={NewAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={MainP} />
          <Route exact path="/shoplist" component={ShopList} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shoplist" component={ShopList} />
          <Route exact path="/shop/shop-detail" component={ShopDetail} />
          <Route
            exact
            path="/shop/shop-detail/:product"
            component={ShopDetail}
          />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/:result" component={SearchResult} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
