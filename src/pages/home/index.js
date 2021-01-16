import React, { PureComponent } from "react";
import { HomeContainer, HomeLeft, HomeRight } from "./style.js";
import Topic from "./components/Topics";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Carousel from "./components/Carousel.js";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeContainer>
        <HomeLeft>
          <Carousel />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>top</BackTop>
        ) : null}
      </HomeContainer>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
