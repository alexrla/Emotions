$(document).ready(function() {
  $(".hamburger-menu").click(function() {
    $(".hamburger-menu").toggleClass("change");
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 650) {
      $(".camera-img").addClass("fromLeft");
      $(".service-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".service-text").removeClass("fromRight");
    }
  });
});