$(window).scroll(function() {


let winScroll = $(this).scrollTop();

//commented out console.log so it's not
//logging all the time! Uncomment to debug.
// console.log(winScroll);

const scrollLocation = 5409;
const scrollIncrement = 28;

if (0 < winScroll) {
  $('.p-1').css({
    "z-index": "2"
  });
  $('.p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if (scrollLocation < winScroll) {
  $('.p-2').css({
    "z-index": "2"
  });
  $('.p-1, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 2)) < winScroll) {
  $('.p-3').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 3)) < winScroll) {
  $('.p-4').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 4)) < winScroll) {
  $('.p-5').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 5)) < winScroll) {
  $('.p-6').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 6)) < winScroll) {
  $('.p-7').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 7)) < winScroll) {
  $('.p-8').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 8)) < winScroll) {
  $('.p-9').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-10, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 9)) < winScroll) {
  $('.p-10').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-11').css({
    "z-index": "-1"
  })
};
if ((scrollLocation + (scrollIncrement * 10)) < winScroll) {
  $('.p-11').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10').css({
    "z-index": "-1"
  })
};




})
