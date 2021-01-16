import React, { PureComponent, Fragment } from "react";
import { ListItem, ListInfo, ListLike, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <Fragment>
        <div>
          {list.map((item, index) => {
            return (
              <Link key={index} to={"/detail/" + item.get("id")}>
                <ListItem>
                  <img
                    alt=""
                    className="listImg"
                    src={item.get("imgUrl")}
                  ></img>
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                    <ListLike>
                      <i className="iconfont like">&#xe7ab;</i>
                      {item.get("like")}
                      <i className="iconfont comment">&#xe6a3;</i>
                      {item.get("comment")}
                    </ListLike>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })}
        </div>
        <LoadMore onClick={() => getMoreList(page)}>More</LoadMore>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  // list: state.get("home").get("articleList"),
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  },
});

export default connect(mapState, mapDispatch)(List);
