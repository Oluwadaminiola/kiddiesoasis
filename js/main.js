
window.onload = function() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        }
        else if($(document).scrollTop() > 100) {
            $('.navbar').addClass('shrink2');
            $('nav').removeClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
            $('.navbar').removeClass('shrink2');
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