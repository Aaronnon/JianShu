import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style";

const Header = (props) => {
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
          <CSSTransition in={props.focused} timeout={300} classNames="slide">
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              className={props.focused ? "focused" : ""}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe77d;
          </i>
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus",
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
