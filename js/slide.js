function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };


const sliderItems = [...document.querySelectorAll('.slidein')];


function slide(e) {
    sliderItems.forEach(sliderItem => {
        
        const slideInAt = (window.scrollY + window.innerHeight) - 200;
        
        console.log(slideInAt);
        const imageBottom = sliderItem.offsetTop + sliderItem.offsetHeight;
        
        const isHalfShown = slideInAt > sliderItem.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotScrolledPast) {
            sliderItem.classList.add('active');
        } /*else {
            sliderImage.classList.remove('active');
        }*/ /*if i want to hide image after scroll */

    });
};

const cos = document.querySelector('.cos');

window.addEventListener('scroll', debounce(slide));