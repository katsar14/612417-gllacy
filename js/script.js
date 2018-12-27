'use strict';

(function() {
  var sliderButtons = document.querySelectorAll('.slider__control');
  var slides = document.querySelectorAll('.slider__item');

  for (var i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', function(evt) {
      document.body.className = 'bg-' + evt.target.id;
      for (var i = 0; i < sliderButtons.length; i++) {
        if (sliderButtons[i].id === evt.target.id) {
          sliderButtons[i].classList.add('slider__control--active');
        } else if (sliderButtons[i].classList.contains('slider__control--active')) {
          sliderButtons[i].classList.remove('slider__control--active');
        }
      };
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('slider__item--' + evt.target.id)) {
          slides[i].classList.remove('slider__item--hidden')
        } else {
          slides[i].classList.add('slider__item--hidden')
        }
      };
    });
  };
})();

(function() {
  var modal = document.querySelector('.overlay');
  var modalOpenBtn = document.querySelector('.contacts__btn');
  var modalCloseBtn = modal.querySelector('.feedback__close-btn');

  modalOpenBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });

  var openModal = function () {
    if(modal.classList.contains('overlay--hidden')) {
      modal.classList.remove('overlay--hidden');
    }

    var onCloseBtnClick = function () {
      modal.classList.add('overlay--hidden');
      modalCloseBtn.removeEventListener('click', onCloseBtnClick);
    }

    modalCloseBtn.addEventListener('click', onCloseBtnClick);
  }
})();