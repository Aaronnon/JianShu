import React, { Component, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { connect } from "react-redux";

class Carousel extends Component {
  render() {
    SwiperCore.use([Pagination, Autoplay]);
    const { list } = this.props;

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <Fragment>
          {list.map((item) => {
            return (
              <SwiperSlide key={item.get("id")}>
                <img
                  alt=""
                  className="bannerImg"
                  src={item.get("imgUrl")}
                ></img>
              </SwiperSlide>
            );
          })}
        </Fragment>
      </Swiper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "swiperList"]),
});

export default connect(mapState, null)(Carousel);
