const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "flip",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
