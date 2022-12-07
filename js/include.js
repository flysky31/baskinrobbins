//메뉴바
let menubar = document.getElementById("menubar");
let closeBox = document.getElementById("closeBox");
let aside = document.getElementById("aside");


menubar.addEventListener("click", function(e){
  e.preventDefault();
  aside.classList.add("on");

})

//메뉴바 닫기
closeBox.addEventListener("click",function(e){
  e.preventDefault();
  aside.classList.remove("on");
})



$(function() {
  $('#aside .aside_inner .ceMenu ul li a.first').click(function(e) {
    $(this).toggleClass("on");
    $('.sub').slideUp('normal');
      if($(this).next('.sub').is(':hidden') === true) {    
        $(this).next('.sub').slideDown('normal');        
      }
    e.preventDefault();
    $('#aside .aside_inner .ceMenu ul li a.first').not(this).removeClass("on")
  });



});

