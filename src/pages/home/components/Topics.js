import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
class Topics extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map((item) => {
          return (
            <TopicItem key={item.get("id")}>
              <img className="itemImg" alt="" src={item.get("imgUrl")}></img>
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.get("home").get("topicList"),
});

export default connect(mapState, null)(Topics);
