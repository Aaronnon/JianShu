import styled from "styled-components";
import logoPic from "../../image/eStudio.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  margin-left: 50px;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin-left: 20px;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    font-size: 22px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left：20pxl;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color:#666;
  &::placeholder{
      color:#999;
  }
  &.focused{
      width:240px;
  }
  &.slide-enter {
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  font-size: 14px;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchInfo = styled.div`
  z-index: 10;
  background: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;

    display: block;
    float: left;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;
