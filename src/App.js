import React, { Component, Fragment } from "react";
import { Globalstyle } from "./style";
import Header from "./common/header/index";
import { Globaliconfont } from "./image/iconfont/iconfont";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Globaliconfont />
          <Globalstyle />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
