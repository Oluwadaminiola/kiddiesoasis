// $(window).scroll(function() {
//     if ($(document).scrollTop() > 100) {
//       $('nav').addClass('chade');
//     } else {
//       $('nav').removeClass('chade');
//     }
//   });
 window.onload = function() {
    $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('nav').addClass('chade');
      } else {
        $('nav').removeClass('chade');
      }
    });
    AOS.init({
        duration: 1200,
      })
//       let a = document.createElement('#downloadbtn')
// a.href = item.url
// a.download = item.url.split('/').pop()
// a.click()
    
    }