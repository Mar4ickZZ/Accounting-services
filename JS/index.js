var swiper = new Swiper(".promo__swiper", {
  pagination: {
    el: ".promo .swiper-pagination",
    clickable: true
  },navigation: {
    nextEl: ".promo .arrow_next",
    prevEl: ".promo .arrow_prew",
  },
});

var swiper = new Swiper(".clients__swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".clients .swiper-pagination",
    clickable: true
  },navigation: {
    nextEl: ".clients .arrow_next",
    prevEl: ".clients .arrow_prew",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".reviews__swiper", {
  pagination: {
    el: ".reviews .swiper-pagination",
    clickable: true
  },navigation: {
    nextEl: ".reviews .arrow_next",
    prevEl: ".reviews .arrow_prew",
  },
});


