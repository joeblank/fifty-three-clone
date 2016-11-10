$(window).scroll(function() {


let winScroll = $(this).scrollTop();

//commented out console.log so it's not
//logging all the time! Uncomment to debug.
// console.log(winScroll);

const scrollLocation = 7862;
const scrollIncrement = 28;

if (0 < winScroll) {
  $('.p-1').css({
    "z-index": "2"
  });
  $('.p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if (scrollLocation < winScroll) {
  $('.p-2').css({
    "z-index": "2"
  });
  $('.p-1, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 2)) < winScroll) {
  $('.p-3').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 3)) < winScroll) {
  $('.p-4').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 4)) < winScroll) {
  $('.p-5').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 5)) < winScroll) {
  $('.p-6').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-7, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 6)) < winScroll) {
  $('.p-7').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 7)) < winScroll) {
  $('.p-8').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-9, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 8)) < winScroll) {
  $('.p-9').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-10, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 9)) < winScroll) {
  $('.p-10').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-11').css({
    "z-index": "-1"
  })
}
if ((scrollLocation + (scrollIncrement * 10)) < winScroll) {
  $('.p-11').css({
    "z-index": "2"
  });
  $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10').css({
    "z-index": "-1"
  })
}


// PARALLAX

//BLUETOOTH

const parallaxRatio = 4899;
//parallaxRatio variable not fully implemented yet
// ^^ DO NOT USE ^^

if(winScroll > parallaxRatio) {
  $('.bluetooth').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4387)
  })
} else {
  $('.bluetooth').css({
    'position': 'static'
  })
};
if (winScroll > parallaxRatio + 150) {
  $('.bluetooth').css({
    'position': 'absolute',
    'top': (parallaxRatio - 4636)
  })
};
// BODY
if (winScroll > parallaxRatio - 10) {
  $('.body').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4377)
  })
} else {
  $('.body').css({
    'position': 'absolute',
    'top': (parallaxRatio - 4784)
  })
}
if (winScroll > parallaxRatio + 501) {
  $('.body').css({
    'position': 'absolute',
    'top': (parallaxRatio - 4271)
  })
}
// BATTERY
if (winScroll > parallaxRatio) {
  $('.battery').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4387)
  })
} else {
  $('.battery').css({
    'position': 'static'
  })
};
if (winScroll > parallaxRatio + 681) {
  $('.battery').css({
    'position': 'absolute',
    'top': (parallaxRatio + 3802)
  })
};
if (winScroll > parallaxRatio + 818) {
  $('.battery').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4697)
  })
};
if (winScroll > parallaxRatio + 1456) {
  $('.battery').css({
    'position': 'absolute',
    'top': (parallaxRatio - 3639)
  })
}

// SENSOR
if(winScroll > parallaxRatio) {
  $('.sensor').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4387)
  })
} else {
  $('.sensor').css({
    'position': 'static'
  })
};
if (winScroll > parallaxRatio + 881) {
  $('.sensor').css({
    'position': 'absolute',
    'top': (parallaxRatio - 3809)
  })
};
if (winScroll > parallaxRatio + 1025) {
  $('.sensor').css({
    'position': 'fixed',
    'top': (parallaxRatio - 4438)
  })
};
if (winScroll > 6351) {
  $('.sensor').css({
    'position': 'absolute',
    'top': '1515px',
    // 'transform': 'translate( 0px, ' + (winScroll / 1000) + '%)'
  })
}
if (winScroll > 6570) {
  $('.sensor').css({
    'position': 'fixed',
    'top': '241px'
  })
}
if (winScroll > 6725) {
  $('.sensor').css({
    'position': 'absolute',
    'top': '1670px'
  })
}


// TIP
if(winScroll > parallaxRatio) {
  $('.tip').css({
    'position': 'absolute',
    'top': "1098px"
  })
} else {
  $('.tip').css({
    'position': 'static'
  })
};
if (winScroll > 5780) {
  $('.tip').css({
    'position': 'absolute',
    'top': '1097px'
  })
};
if (winScroll > 5924) {
  $('.tip').css({
    'position': 'fixed',
    'top': '468px'
  })
};
if (winScroll > 6700) {
  $('.tip').css({
    'position': 'absolute',
    'top': '1875px'
  })
}

//HIDDEN TEXT FOR PARALLAX

//eraser
if (winScroll > 4933) {
  $('.left-eraser').fadeIn(600)
} else if (winScroll <= 4933) {
  $('.left-eraser').fadeOut(600)
}
if (winScroll > 4935) {
  $('.right-eraser').fadeIn(600)
} else if (winScroll <= 4935) {
  $('.right-eraser').fadeOut(600)
}
//bluetooth
if (winScroll > 5125) {
  $('.left-bluetooth').fadeIn(600)
} else if (winScroll <= 5125) {
  $('.left-bluetooth').fadeOut(600)
}
if (winScroll > 5127) {
  $('.right-bluetooth').fadeIn(600)
} else if (winScroll <= 5127) {
  $('.right-bluetooth').fadeOut(600)
}
//body
if (winScroll > 5470) {
  $('.left-body').fadeIn(600)
} else if (winScroll <= 5470) {
  $('.left-body').fadeOut(600)
}
if (winScroll > 5472) {
  $('.right-body').fadeIn(600)
} else if (winScroll <= 5472) {
  $('.right-body').fadeOut(600)
}
//battery
if (winScroll > 6145) {
  $('.left-battery').fadeIn(600)
} else if (winScroll <= 6145) {
  $('.left-battery').fadeOut(600)
}
if (winScroll > 6147) {
  $('.right-battery').fadeIn(600)
} else if (winScroll <= 6147) {
  $('.right-battery').fadeOut(600)
}
//sensor
if (winScroll > 6548) {
  $('.left-sensor').fadeIn(600)
} else if (winScroll <= 6548) {
  $('.left-sensor').fadeOut(600)
}
if (winScroll > 6550) {
  $('.right-sensor').fadeIn(600)
} else if (winScroll <= 6550) {
  $('.right-sensor').fadeOut(600)
}
//tip
if (winScroll > 6738) {
  $('.left-tip').fadeIn(600)
} else if (winScroll <= 6738) {
  $('.left-tip').fadeOut(600)
}
if (winScroll > 6740) {
  $('.right-tip').fadeIn(600)
} else if (winScroll <= 6740) {
  $('.right-tip').fadeOut(600)
}





// END
})
