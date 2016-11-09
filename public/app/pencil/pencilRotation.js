$(window).scroll(function() {


let winScroll = $(this).scrollTop();

//commented out console.log so it's not
//logging all the time! Uncomment to debug.
console.log(winScroll);

const scrollLocation = 7862;
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


// PARALLAX

//BLUETOOTH
if(winScroll > 4899) {
  $('.bluetooth').css({
    'position': 'fixed',
    'top': '512px'
  })
} else {
  $('.bluetooth').css({
    'position': 'static'
  })
};
if (winScroll > 5049) {
  $('.bluetooth').css({
    'position': 'absolute',
    'top': '263px'
  })
};
// BODY
if (winScroll > 4889) {
  $('.body').css({
    'position': 'fixed',
    'top': '522px'
  })
} else {
  $('.body').css({
    'position': 'static'
  })
};
if (winScroll > 5400) {
  $('.body').css({
    'position': 'absolute',
    'top': '628px'
  })
};
// BATTERY
if(winScroll > 4899) {
  $('.battery').css({
    'position': 'fixed',
    'top': '512px'
  })
};
// TIP
if(winScroll > 4899) {
  $('.tip').css({
    'position': 'fixed',
    'top': '512px'
  })
} else {
  $('.battery').css({
    'position': 'static'
  })
};
if (winScroll > 5880) {
  $('.tip').css({
    'position': 'absolute',
    'top': '628px'
  })
}





})
