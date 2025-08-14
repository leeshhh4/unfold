var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 4000, // 속도 (전체 루프 시간)
  autoplay: {
    delay: 0, // 지연 없이
    disableOnInteraction: false,
  },
  freeModeMomentum: false, // 관성 멈춤
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 4500, // 속도 (전체 루프 시간)
  autoplay: {
    delay: 0, // 지연 없이
    disableOnInteraction: false,
  },
  freeModeMomentum: false, // 관성 멈춤
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// sec03 swiper slide
var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 6,
      spaceBetween: 10,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 6000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// sec04 swiper slide
var swiper = new Swiper(".mySwiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 158, 
        depth: 200,
        modifier: 1,
        slideShadows: false // 그림자 제거
    }
});