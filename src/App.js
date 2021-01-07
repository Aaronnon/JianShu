import React, { Component, Fragment } from "react";
import { Globalstyle } from "./style";
import Header from "./common/header/index";
import { Globaliconfont } from "./image/iconfont/iconfont";
import store from "./store/index";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Globaliconfont />
          <Globalstyle />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
