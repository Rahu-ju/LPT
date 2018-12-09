//Add active class to the current button (highlight it)
  // var header = document.getElementById("navbarSupportedContent");
  // var btns = header.getElementsByClassName("nav-link");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace("active", " ");
  //     this.className += " active";
  //   });
  // }
var setDefaultActive = function() {
   var path = window.location.pathname;
   var element = $(".nav-item a[href='" + path + "']");
   element.addClass("active");
   }
setDefaultActive();


// Show last accordian panel after page load.
$(document).ready(function(){
 $('.collapse:last').addClass('show');
 $('.card:last .small-custom ').append('actions on this day')

});

// remove and add content inside small-custom class
$('.card-header').click(
  function(){
    $('.small-custom').empty()
    $(this).find('.small-custom').append('actions on this day')
  }
)

// Closing the bootstrap alertbox after 4s
$('.alert > button').addClass('d-none')
$(".alert").removeClass('alert-dismissable fade show').addClass('animated zoomIn d-inline-flex justify-content-center')
setTimeout(function(){
    $('.alert').addClass('animated zoomOut')
}, 4000);

// 
