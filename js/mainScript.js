//Sidebar Function
function openSidebar(){
  document.getElementById('main').style.marginLeft = "25%";
  if(screen.width>=420){
    document.getElementById('sidebar').style.width = "25%";
  }else{
    document.getElementById('sidebar').style.width = "80%";
  }
  document.getElementById('sidebar').style.display = "block";
  document.getElementById('navBt').style.display = "none";
}
function closeSidebar(){
  document.getElementById('main').style.marginLeft = "0%";
  document.getElementById('sidebar').style.display = "none";
  document.getElementById('navBt').style.display = "inline-block";
}
function openGravitasWeb(){
  window.open("http://www.vitgravitas.com/", '_blank');
}
//Code for differential background based on image size
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;
//scroll function
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("scrollBtn").style.display = "block";
  }else{
    document.getElementById("scrollBtn").style.display = "none";
  }
};
$(document).on('click', 'button', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
});
// The onload:
window.onload = function(){
    if (x<568) {
        document.getElementById("landImg").src="img/2.jpg";
        document.getElementById("landImg").style.display = "block";
        document.getElementById("body").style.background = "#080b0f";
        document.getElementById("games-head").style.background = "#080b0f";
    }
    else {
        document.getElementById("landImg").src="img/1.jpg";
        document.getElementById("landImg").style.display = "block";
    }
};
//cntl-timeline
$(document).ready(function(e){
  $('.cntl').cntl({
    revealbefore : 300,
    anim_class : 'cntl-animate',
    onreveal : null
  });
});
//jQuery
$(function(){
  $('p.theme').textillate({
    in : {
      //effect : 'rotateInUpRight',
      effect : 'fadeInUpBig',
      delay : 500,
      shuffle : false
    }
  });
});
//jQuery
$(function(){
  $('p.eventDate').textillate({
    in : {
      //effect : 'rotateInUpRight',
      effect : 'fadeInUpBig',
      delay : 210,
      shuffle : false
    }
  });
});

$(document).ready(function(){
  $('ul.pgwSlider').pgwSlider({
    autoSlide : true,
    transitionEffect : "fading",
    intervalDuration : 2200,
    displayControls : false,
    listPosition : "right",
    maxHeight : 900
  });
});