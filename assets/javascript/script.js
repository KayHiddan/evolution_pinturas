$(document).ready(() => {
    $('#mobile_menu_button').click(function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_menu_button').find('i').toggleClass('fa-bars fa-times');
   
      });

    const section = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
      const header = $('header')
      const scrollposition = $(window).scrollTop() - header.outerHeight();
      
      let activeSectionIndex = 0; 

      if(scrollposition <= 0 ){
        header.css('box-shadow', 'none');
      } else {
        header.css('box-shadow', '5px 1px 7px rgba(0, 0, 0, 0.1');
      }

      section.each(function(i){
        const section = $(this); 
        const sectionTop = section.offset().top - 150
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollposition >= sectionTop && scrollposition < sectionBottom){
          activeSectionIndex = i;
          return false;
        }
      })

      navItems.removeClass('active')
      $(navItems [activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('.conteudo', {
      origin: 'left',
      duration:2000,
      distance: '20%'
    })

    ScrollReveal().reveal('.content', {
      origin: 'left',
      duration:2000,
      distance: '20%'
    })

     ScrollReveal().reveal('.about_content', {
      origin: 'left',
      duration:2000,
      distance: '20%'
    })

    ScrollReveal().reveal('.testimonials_title', {
      origin: 'left',
      duration:2000,
      distance: '20%'
    })

});

const swiper = new Swiper('.swiper_container', {
  direction: 'horizontal',
  spaceBetween:24,
  loop: false,

  grabCursor:true,
  speed:900,
  autoplay: {

    disableOnInteraction: false,
  },

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

