'use strict';

var sliderButtons = document.querySelectorAll('.slider__control');
var slides = document.querySelectorAll('.slider__item');

sliderButtons.forEach(function(btn) {
  btn.addEventListener('click', function(evt) {
    sliderButtons.forEach(function(button) {
      if (button.id === evt.target.id) {
        button.classList.add('slider__control--active');
      } else if (button.classList.contains('slider__control--active')) {
        button.classList.remove('slider__control--active');
      }
    });
    slides.forEach(function(slide) {
      if (slide.classList.contains('slider__item--' + evt.target.id)) {
        slide.classList.remove('slider__item--hidden');
      } else {
        slide.classList.add('slider__item--hidden');
      }
    });
  });
});