import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

class Header extends Component {
  getListArea() {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Trending
            <SearchInfoSwitch>Refresh</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>
          <NavItem className="right">Log in</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe77d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe77b;</i>
            Write
          </Button>
          <Button className="reg">Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
