'use strict'

// Кнопка Заказать

let modal = document.querySelector(".modal");
let toOrder = document.querySelectorAll(".btn");
let modalClose = document.querySelector(".modal__close");
let userName = modal.querySelector("[name=name]");

for (let i = 0; i < toOrder.length; i++) {
  let orderItem = toOrder[i];
  orderItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    userName.focus();
  });
};

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
    }
  }
});

// Кнопка Показать ещё...

let imageAll = document.querySelectorAll(".image-all");
let imageWrap = document.querySelectorAll(".image-wrap");
let imageDoors = document.querySelectorAll(".image-wrap--doors");

for (let i = 0; i < imageAll.length; i++) {
  imageAll[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (imageWrap[i].style.height === 'auto') {
      imageWrap[i].style.height = '200px';
      if (imageWrap[i].classList.contains('image-wrap--doors')) {
        imageDoors[i].style.height = '365px';
      };
    } else {
      imageWrap[i].style.height = 'auto';
    };
  });
};


