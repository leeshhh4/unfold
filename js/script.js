// ■■■■■■■■■■ header ■■■■■■■■■■
// gnb - section - .star 스크롤 이동
let scrollTimeout;

function updateGnbOnByScroll() {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const visual = document.querySelector("#visual"); // #visual 요소 가져오기
    const banner = document.querySelector("#banner"); // #banner 요소
    const footer = document.querySelector("#footer"); // #footer 요소
    const gnbItems = document.querySelectorAll(".gnb li"); // gnb 메뉴 리스트

    // visual 위치 계산
    const visualTop = visual.offsetTop;
    const visualBottom = visualTop + visual.offsetHeight;

    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    // 1) visual 영역 안, .on 제거 + 함수 종료
    if (scrollMiddle >= visualTop && scrollMiddle < visualBottom) {
      gnbItems.forEach(item => {
        item.classList.remove("on");
        const star = item.querySelector(".star");
        if (star) star.style.opacity = "0"; // star 숨기기
      });
      return;  // 여기서 멈추고 아래 로직 실행 안 함
    }

    // 1.5) banner나 footer 영역일 때도 .star 숨기고 .on 제거
    if (
      (banner && scrollMiddle >= banner.offsetTop && scrollMiddle < banner.offsetTop + banner.offsetHeight) ||
      (footer && scrollMiddle >= footer.offsetTop && scrollMiddle < footer.offsetTop + footer.offsetHeight)
    ) {
      gnbItems.forEach(item => {
        item.classList.remove("on");
        const star = item.querySelector(".star");
        if (star) star.style.opacity = "0";
      });
      return; // 여기서 종료
    }

    // 2) visual 밖, 기존 섹션별 체크 진행
    const sections = document.querySelectorAll("div[id^='sec']");
    let currentSection = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      gnbItems.forEach(item => {
        const link = item.querySelector("a");
        const href = link.getAttribute("href").replace(/^.*#/, "");
        const star = item.querySelector(".star");
        if (href === currentSection) {
          item.classList.add("on");
          if (star) star.style.opacity = "1"; // star 보이기
        } else {
          item.classList.remove("on");
          if (star) star.style.opacity = "0"; // star 숨기기
        }
      });
    }
  }, 100);
}

window.addEventListener("scroll", updateGnbOnByScroll);
updateGnbOnByScroll(); // 새로고침 직후 최초 1회 실행

// topBtn
document.querySelector('#btnTop a').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('p.main_txt'); // p.main_txt로 타겟 변경
  const headerOffset = 180; // header(80) + margin-top(100) 합산

  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnTop.style.display = 'block';  // 보이게
  } else {
    btnTop.style.display = 'none';   // 숨기기
  }
});

// 페이지 로드 시 초기 상태 설정
if (window.scrollY > 100) {
  btnTop.style.display = 'block';
} else {
  btnTop.style.display = 'none';
}



// ■■■■■■■■■■ visual ■■■■■■■■■■
// 타이핑 + 커서 깜빡임 효과 함수 (중복 없이 단일 함수)
function typeHTML(element, text, speed = 120, delayAfter = 3000) {
  let i = 0;
  element.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.classList.add('blinking-cursor');
  element.appendChild(cursor);

  function type() {
    if (i >= text.length) {
      // 타이핑 끝나면 잠깐 대기 후 재시작
      setTimeout(() => {
        i = 0;
        element.innerHTML = '';
        element.appendChild(cursor);
        type();
      }, delayAfter);
      return;
    }

    if (text[i] === '\n') {
      element.insertBefore(document.createElement('br'), cursor);
      i++;
      type();
    } else {
      const textNode = document.createTextNode(text[i]);
      element.insertBefore(textNode, cursor);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#visual .title.main_txt');
  let htmlText = title.innerHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '');
  typeHTML(title, htmlText, 120, 3000); // speed=120ms, delayAfter=1500ms
});


// 캐릭터 모션
window.addEventListener('scroll', () => {
  const motion = document.querySelector('.character_motion');
  const visual = document.getElementById('visual');
  if (!motion || !visual) return;

  const rect = visual.getBoundingClientRect();

  const headerHeight = 80; // 고정 헤더 높이
  const offsetAdjustment = 100; // 추가 보정값(실험적으로 조절)

  // rect.top 보정 (header 높이 + offsetAdjustment 만큼 빼줌)
  let adjustedTop = rect.top - headerHeight - offsetAdjustment;

  // progress 0~1 범위로 맞추기 (adjustedTop이 0일때 progress=0, 음수면 progress>0)
  const maxScrollRange = -offsetAdjustment; // 음수값
  let progress = (0 - adjustedTop) / (0 - maxScrollRange);

  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  const startTop = 210;
  const endTop = 290;
  const currentTop = startTop + (endTop - startTop) * progress;

  motion.style.top = currentTop + 'px';

});


// ■■■■■■■■■■ sec02 ■■■■■■■■■■
$('.open_folder').hide();
$(document).ready(function () {
    $('.folder_wrap li').hover(
        function () {
            $(this).find('.close_folder').hide();
            $(this).find('.open_folder').show();
        },
        function () {
            $(this).find('.close_folder').show();
            $(this).find('.open_folder').hide();
        }
    );
});
// slide
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
      spaceBetween: 40,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 


// ■■■■■■■■■■ sec04 ■■■■■■■■■■
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// ■■■■■■■■■■ sec05 ■■■■■■■■■■
// tab
$(function(){
    $(".board li a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on")
    });
});
// slide
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      spaceBetween:20,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        },
  speed: 7000,
});


// ■■■■■■■■■■ sec06 ■■■■■■■■■■
(function () {
      $('.flex-container').waitForImages(function () {
        $('.spinner').fadeOut();
      }, $.noop, true);

      $(".flex-slide").each(function () {
        $(this).hover(function () {
          $(this).find('.flex-title').css({
            // transform: 'rotate(0deg)',
            top: '10%'
          });
          $(this).find('.flex-about').css({
            opacity: '1'
          });
        }, function () {
          $(this).find('.flex-title').css({
            // transform: 'rotate(90deg)',
            top: '15%'
          });
          $(this).find('.flex-about').css({
            opacity: '0',
            trasform: 'scale(0)'
          });
        })
      });
    })();


// banner
jQuery(document).ready(function ($) {
    let counted = false; // 이미 실행했는지 여부

    $(window).on('scroll', function() {
        const bannerTop = $('#banner').offset().top;
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        // #banner가 화면 안에 들어오고 아직 카운팅 안 한 경우
        if (!counted && scrollTop + windowHeight > bannerTop) {
            $('.counter').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            counted = true; // 한 번만 실행되게
        }
    });
});