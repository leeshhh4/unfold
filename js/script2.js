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

// gsap 타로카드 회전
gsap.registerPlugin(ScrollTrigger);

gsap.to(".t1 .tarotcard_inner", {
  rotateY: 180,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".t1",
    start: "top 80%",
    once: true, // 한 번만 회전
    markers: false
  }
});

gsap.to(".t2 .tarotcard_inner", {
  rotateY: 180,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".t2",
    start: "top 80%",
    once: true,
    markers: false
  }
});

gsap.to(".t3 .tarotcard_inner", {
  rotateY: 180,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".t3",
    start: "top 80%",
    once: true,
    markers: false
  }
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