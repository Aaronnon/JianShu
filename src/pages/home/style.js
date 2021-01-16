import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .bannerImg {
    width: 625px;
    height: 270px;
    object-fit: cover;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  user-select: none;
  cursor: pointer;
  margin-left: 18px;
  float: left;
  padding-right: 10px;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;
  .itemImg {
    margin-right: 10px;
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const ListItem = styled.div`
  position: relative;
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #bcbcbc;
  .listImg {
    margin-top: 10px;
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListLike = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: #b4b4b4;
  position: absolute;
  right: 0;
  float: right;
  .like {
    margin-right: 6px;
    font-size: 8px;
    color: #fa5e44;
  }
  .comment {
    margin-left: 6px;
    margin-right: 2px;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  user-select: none;
  cursor: pointer;
  width: 280px;
  height: 50px;
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-top: 20px;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
  user-select: none;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  font-size: 14px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;
`;
