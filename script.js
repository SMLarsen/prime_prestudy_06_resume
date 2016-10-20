$(document).ready(function() {
  $('nav').on('click', '.org', function() {
    $(this).toggleClass('clicked');
  });
  $('#letsGo').on('click', function() {
    $("nav").removeClass("hide");
    $("body").animate({ scrollTop: $('#steveRoles').offset().top - 50 }, 2000);
  });
  $('#bloggerB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#blogger').offset().top - 100 }, 1000);
  });
  $('#ampfB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#ampf').offset().top - 35 }, 1000);
  });
  $('#znthB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#znth').offset().top - 35 }, 1000);
  });
  $('#csciB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#csci').offset().top - 35 }, 1000);
  });
  $('#uhgB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#uhg').offset().top - 35 }, 1000);
  });
  $('#bcbsmB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#bcbsm').offset().top - 35 }, 1000);
  });
  $('#otherB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#other').offset().top - 35 }, 1000);
  });
  $('#eduB').on('click', function() {
    $("main").removeClass("hide");
    $("body").animate({ scrollTop: $('#education').offset().top - 35 }, 1000);
  });

});
