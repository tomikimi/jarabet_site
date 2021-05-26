new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: { delay: 3000 },
  // responsive breakpoints
  breakpoints: {
    "@0": {
      slidesPerView: 2,
    },
    //888px
    "@1.00": {
      slidesPerView: 1,
    },
    //1110px
    "@1.25": {
      slidesPerView: 1,
    },
    //1330px
    "@1.00": {
      slidesPerView: 1,
    },
  },
});
