import React, { Component, Fragment } from "react";
import { Globalstyle } from "./style";
import Header from "./common/header/index";
import { Globaliconfont } from "./image/iconfont/iconfont";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Globaliconfont />
          <Globalstyle />
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
