$(document).ready(() => {
    $('#mobile_menu_button').click(function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_menu_button').find('i').toggleClass('fa-bars fa-times');
    });
});

const swiper = new Swiper('.swiper_container', {
  direction: 'horizontal',
  spaceBetween:24,
  loop: false,
  grabCursor:true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024:{
        slidesPerView:3,
    }
  }
});