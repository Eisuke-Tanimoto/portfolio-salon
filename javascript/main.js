const menuOpen = document.querySelector('.menu-btn');
const cover = document.querySelector('.cover');

menuOpen.addEventListener('click', function() {
  menuOpen.classList.toggle('menu-open');
})

menuOpen.addEventListener('click', function() {
  cover.classList.toggle('menu-open')
})

// トップスライダーイベント

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
  },
});