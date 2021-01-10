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
    const {
      focused,
      list,
      totalPage,
      page,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Trending
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => (this.spinIcon = icon)}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              Refresh
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Detail</NavItem>
          <NavItem className="right">Log in</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
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
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
