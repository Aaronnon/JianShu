import React, { Component, Fragment } from "react";
import { ListItem, ListInfo, ListLike } from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <div>
          {list.map((item) => {
            return (
              <ListItem key={item.get("id")}>
                <img alt="" className="listImg" src={item.get("imgUrl")}></img>
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
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  // list: state.get("home").get("articleList"),
  list: state.getIn(["home", "articleList"]),
});

export default connect(mapState)(List);
