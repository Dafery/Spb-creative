$('[data-fancybox*=gallery]').fancybox({
  animationEffect: "fade",
  autoFocus: false,
  clickContent: false, //на моб.версии нужно true
  touch: false, //на моб.версии нужно true
  buttons: [
    "close"
  ],
  caption: function (instance, item) {
    return $(this).find('figcaption').html();
  }
});


// jQuery('.fancybox').fancybox({
//   padding: 0, //убираем отступ
//   helpers: {
//     overlay: {
//       locked: false // отключаем блокировку overlay
//     }
//   }
// });
  

    