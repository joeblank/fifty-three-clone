$(window).scroll(function() {

let winScroll = $(this).scrollTop();

//commented out console.log so it's not
//logging all the time! Uncomment to debug.
// console.log(winScroll);


if (0 < winScroll) {
  $('.p-1').css({
    "z-index": "2"
  });
  $('.p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5409 < winScroll) {
  $('.p-2').css({
    "z-index": "2"
  });
  $('.p-1, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5429 < winScroll) {
  $('.p-3').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5449 < winScroll) {
  $('.p-4').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5469 < winScroll) {
  $('.p-5').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5489 < winScroll) {
  $('.p-6').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5509 < winScroll) {
  $('.p-7').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5529 < winScroll) {
  $('.p-8').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5549 < winScroll) {
  $('.p-9').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (5569 < winScroll) {
  $('.p-10').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-11').css({
    "z-index": "-1"
  })
};
if (5589 < winScroll) {
  $('.p-11').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10').css({
    "z-index": "-1"
  })
};




})
