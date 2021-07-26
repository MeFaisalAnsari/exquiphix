$(document).ready(function () {
  $(".burger").click(function () {
    $(".header").toggleClass("burger-clicked");
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      $(".header").css("background-color", "rgba(255, 255, 255, 0.3)");
    } else {
      document.getElementById("header").style.top = "-81px";
    }
    prevScrollpos = currentScrollPos;

    if (window.pageYOffset == 0) {
      $(".header").css("background", "none");
    }
  };

  $(".burger").click(function () {
    $("body").toggleClass("position-fixed");
  });

  $(".img-down").click(function () {
    $("html, body").animate(
      { scrollTop: $("#after-display").offset().top },
      "slow"
    );
    return false;
  });
});
