$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  
 /*  $("body").on("click", function () {
    if(!($(".rightside-menu").hasClass("rightside-menu--close"))){
     console.log("gello");
     $(".rightside-menu").addClass("rightside-menu--close");
    }
  }); */
});
