import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function swiper (){

const swiper = new Swiper('.swiper', {
   
    slidesPerView: 'auto',
    spaceBetween: 12,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true;
    },

    breakpoints: {
      840: {
        spaceBetween: 24,
      },
    },

});

}

export default swiper;