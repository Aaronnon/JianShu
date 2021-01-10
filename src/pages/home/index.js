import React, { Component } from "react";
import { HomeContainer, HomeLeft, HomeRight } from "./style.js";
import Topic from "./components/Topics";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Carousel from "./components/Carousel.js";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeLeft>
          <Carousel />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeContainer>
    );
  }
}

export default Home;
