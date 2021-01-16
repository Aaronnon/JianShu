import styled from "styled-components";

export const DetailPage = styled.div`
  width: 100%;
  height: 100%;
  background: #eee;
  padding-top: 20px;
`;

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  padding: 0 20px 0 20px;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 100px;
  box-shadow: 10px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-heigh: 44px;
  color: #333;
  font-weight: bold;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    user-select: none;
  }
  p {
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
    line-height: 30px;
  }
`;
