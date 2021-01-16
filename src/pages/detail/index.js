import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content, DetailPage } from "./style";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
class Detail extends PureComponent {
  render() {
    return (
      <DetailPage>
        <DetailWrapper>
          <Header>{this.props.title}</Header>
          <Content
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          ></Content>
        </DetailWrapper>
      </DetailPage>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
