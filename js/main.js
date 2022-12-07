//헤더 푸터 연결
$("#header").load("./header.html");
$("#footer").load("./footer.html");
$("#aside").load("./aside.html");


//메인슬라이드
var swiper = new Swiper(".mainSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: false
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

  
//product tab
let targetLink = document.querySelectorAll(".tab-menu a");
let tabContent = document.querySelectorAll("#tab-content > div");
//console.log(tabContent)

for(let i=0; i<targetLink.length; i++){
  targetLink[i].addEventListener("click", function(e){
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href");
    let tabTarget = orgTarget.replace("#",'');

    for(let v=0; v< tabContent.length; v++){
      tabContent[v].style.display = "none";
    }
    
    document.getElementById(tabTarget).style.display = "block";

    for( let x = 0; x<targetLink.length; x++){
      targetLink[x].classList.remove("active");
      
      e.target.classList.add("active");
    }
  })
}
document.getElementById("tabs-1").style.display = "block";


//product tab01 slide 
var swiper = new Swiper(".tab01_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab01.swiper-button-next",
    prevEl: ".tab01.swiper-button-prev",
  },
  pagination: {
    el: ".tab01.swiper-pagination",
    clickable: true,
  }
});

//product tab02 slide 
var swiper = new Swiper(".tab02_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab02.swiper-button-next",
    prevEl: ".tab02.swiper-button-prev",
  },
    pagination: {
      el: ".tab02.swiper-pagination",
      clickable: true,
    }
});


//product tab03 slide 
var swiper = new Swiper(".tab03_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab03.swiper-button-next",
    prevEl: ".tab03.swiper-button-prev",
  },
  pagination: {
    el: ".tab03.swiper-pagination",
    clickable: true,
  }
});


//product tab04 slide 
var swiper = new Swiper(".tab04_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab04.swiper-button-next",
    prevEl: ".tab04.swiper-button-prev",
  },
  pagination: {
    el: ".tab04.swiper-pagination",
    clickable: true,
  }
});



//product tab05 slide 
var swiper = new Swiper(".tab05_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab05.swiper-button-next",
    prevEl: ".tab05.swiper-button-prev",
  },
  pagination: {
    el: ".tab05.swiper-pagination",
    clickable: true,
  }
});



//product tab06 slide 
var swiper = new Swiper(".tab06_slide", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 1000,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab06.swiper-button-next",
    prevEl: ".tab06.swiper-button-prev",
  },
  pagination: {
    el: ".tab06.swiper-pagination",
    clickable: true,
  }
});

//product menu center
var swiper = new Swiper('.snbSwiper', {
  slidesPerView: 4,
  preventClicks: true,
  preventClicksPropagation: false,
  observer: true,
  observeParents: true
});
var $snbSwiperItem = $('.snbSwiper .swiper-wrapper .swiper-slide a');

$snbSwiperItem.click(function(){
  var target = $(this).parent();
  $snbSwiperItem.parent().removeClass('on')
  target.addClass('on');
  muCenter(target);
})

function muCenter(target){
  var snbwrap = $('.snbSwiper .swiper-wrapper');
  var targetPos = target.position();
  var box = $('.snbSwiper');
  var boxHarf = box.width()/2;
  var pos;
  var listWidth=0;
  
  snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
  
  var selectTargetPos = targetPos.left + target.outerWidth()/2;
  if (selectTargetPos <= boxHarf) { // left
      pos = 0;
  }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
      pos = listWidth-box.width();
  }else {
      pos = selectTargetPos - boxHarf;
  }
  
  setTimeout(function(){snbwrap.css({
      "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
      "transition-duration": "500ms"
  })}, 200);
}




//이벤트슬라이드
var swiper = new Swiper(".eventSlide", {
  slidesPerView: 'auto',
  //spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//상하단이동  
document.getElementById("gotop").onclick = function() {
  topFunction()
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });  
}


document.getElementById("gobottom").onclick = function() {
  bottomFunction()
};
function bottomFunction() {
  window.scrollTo({ 
    top: document.body.scrollHeight, behavior: "smooth" 
  });
}




