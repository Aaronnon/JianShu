import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "Audi",
      imgUrl:
        "https://cdn.pixabay.com/photo/2018/01/19/20/56/truck-3093197_1280.png",
    },
    {
      id: 2,
      title: "BMW",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_1280.png",
    },
    {
      id: 3,
      title: "Veritas",
      imgUrl:
        "https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: 4,
      title: "Christmas",
      imgUrl:
        "https://images.freeimages.com/images/large-previews/d93/gifts-5-1316929.jpg",
    },
    {
      id: 5,
      title: "StarBuck",
      imgUrl:
        "https://images.pexels.com/photos/1596566/pexels-photo-1596566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 6,
      title: "Ordinary",
      imgUrl:
        "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 7,
      title: "Trash",
      imgUrl:
        "https://images.pexels.com/photos/4109270/pexels-photo-4109270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ],
  articleList: [
    {
      id: 1,
      like:172,
      comment:80,
      title:
        '"A letter from a strange woman": I have loved you for a lifetime,but you know nothing',
      desc:
        "I have loved you all my life, but you know nothing about me! I have loved you all my life, but you never recognized me! This memorial great love comes from the novella written by Austrian writer Zweig-A strange woman...",
      imgUrl:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      like:108,
      comment:30,
      title:
        "I am a married man and fell in love with a girl. How can I continue my life?",
      desc:
        "I had been married for 4 years when I first saw her. When I saw her, I liked her at first sight, but she had a boyfriend! At that time my child was only 3 years old, and then I secretly loved her for 4 years, and I didn’t have the courage to tell her that the 4 years process...",
      imgUrl:
        "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      like:312,
      comment:137,
      title:
        "She suspects that her husband has ulterior motives for her daughter",
      desc:
        "She remarried with her 14-year-old daughter and married a first-married subordinate who was 6 years younger than her. This stepfather bought clothes and food for her daughter. In short, she was more intimate than her mother. But when she is on business or not here...",
      imgUrl:
        "https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 4,
      like:548,
      comment:202,
      title: "There is a lot of X love in the bar.",
      desc:
        "1. When Lin Han rushed to the hospital after answering the phone, Du Xiaoyue was infusion. Acute stomach bleeding is not the first time. When I met Du Xiaoyue, her stomach was missing. Lin Han walked over and looked at the infusion bag...",
      imgUrl:
        "https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ],
  swiperList: [
    {
      id: 1,
      imgUrl: "https://i.ibb.co/fnhhTMS/business-time-clock-clocks-48770.jpg",
    },
    {
      id: 2,
      imgUrl:
        "https://images.pexels.com/photos/5499131/pexels-photo-5499131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      imgUrl:
        "https://images.pexels.com/photos/6194973/pexels-photo-6194973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
