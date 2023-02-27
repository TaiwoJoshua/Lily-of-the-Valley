function getNextDayOfTheWeek(dayName, excludeToday = true, refDate = new Date()) {
  const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"].indexOf(dayName.slice(0,3).toLowerCase());
  if (dayOfWeek < 0) return;
  refDate.setHours(0,0,0,0);
  refDate.setDate(refDate.getDate() + +!!excludeToday + (dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7);
  return refDate;
}

Sun = getNextDayOfTheWeek("Sunday", false);
Sunday = Sun.toString().slice(8,10);

Mon = getNextDayOfTheWeek("Monday", false);
Monday = Mon.toString().slice(8,10);

Tues = getNextDayOfTheWeek("Tuesday", false);
Tuesday = Tues.toString().slice(8,10);

Thur = getNextDayOfTheWeek("Thursday", false);
Thursday = Thur.toString().slice(8,10);

Fri = getNextDayOfTheWeek("Friday", false);
Friday = Fri.toString().slice(8,10);

// Exclude First Fridays
if(parseInt(Friday) < 7){
  Friday = parseInt(Friday) + 7;
}

month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(".sunday>div>div>.month").text(month[Sun.getMonth()]);
$(".sunday>div>div>.day").text(day[Sun.getDay()]);
$(".sunday>div>div>.date").text(Sunday);

$(".monday>div>div>.month").text(month[Mon.getMonth()]);
$(".monday>div>div>.day").text(day[Mon.getDay()]);
$(".monday>div>div>.date").text(Monday);

$(".tuesday>div>div>.month").text(month[Tues.getMonth()]);
$(".tuesday>div>div>.day").text(day[Tues.getDay()]);
$(".tuesday>div>div>.date").text(Tuesday);

$(".thursday>div>div>.month").text(month[Thur.getMonth()]);
$(".thursday>div>div>.day").text(day[Thur.getDay()]);
$(".thursday>div>div>.date").text(Thursday);

$(".friday>div>div>.month").text(month[Fri.getMonth()]);
$(".friday>div>div>.day").text(day[Fri.getDay()]);
$(".friday>div>div>.date").text(Friday);

curr = new Date();
$("#year").text(curr.getFullYear());

const span = document.querySelector("#copy");
const acc = document.getElementById("anumber");

span.onclick = function() {
  document.execCommand("copy");
  $("#copied").fadeIn(1000, function(){
    $("#copied").fadeOut(1000);
  })
}
span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", acc.textContent);
  }
});

$("#more").click(function(){
  $(".about>div").css('overflow-y', 'scroll');
  $("#more").hide();
});

navbarh = $(".nav2>ul").css("height");
$(window).scroll(function(){
  const nav = document.getElementById("shownav");
  var scrollTop = $(window).scrollTop(),
  elementOffset = $("#welcome").offset().top,
  distance = (elementOffset - scrollTop);

  if(distance <= 0){
    $("#shownav").css("visibility", "visible");
    $("#hidenav").css("visibility", "visible");
    if(document.getElementById("hidenav").style.top == navbarh){

    }else{
      document.getElementById("shownav").style.top = "0px";
    }
    nav.classList.add("animate__fadeIn");
    nav.classList.remove("animate__fadeOut");
  }else{
    nav.classList.add("animate__fadeOut");
    nav.classList.remove("animate__fadeIn");
    document.querySelector(".nav2>ul").style.top = "-" + (parseFloat(navbarh.slice(0, navbarh.length)) + 5).toString() + "px";
    document.getElementById("hidenav").style.top = "-" + navbarh;
  }
});

document.querySelector(".nav2>ul").style.top = "-" + (parseFloat(navbarh.slice(0, navbarh.length)) + 5).toString() + "px";
$("#shownav").click(function(){
  document.getElementById("shownav").style.top = "-31px";
  setTimeout(function(){
    document.querySelector(".nav2>ul").style.top = "0px";
    document.getElementById("hidenav").style.top = navbarh;
  }, 500); 
});

$("#hidenav").click(function(){
  document.querySelector(".nav2>ul").style.top = "-" + navbarh;
  document.getElementById("hidenav").style.top = "-31px";
  setTimeout(function(){
    document.getElementById("shownav").style.top = "0px";
  }, 500); 
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav2>ul").style.top = "-" + navbarh;
    document.getElementById("hidenav").style.top = "-31px";
    setTimeout(function(){
      document.getElementById("shownav").style.top = "0px";
    }, 500); 
  } else {
    document.querySelector(".nav2>ul").style.top = "-" + navbarh;
    document.getElementById("hidenav").style.top = "-31px";
    setTimeout(function(){
      document.getElementById("shownav").style.top = "0px";
    }, 500); 
  }
  prevScrollpos = currentScrollPos;
}

var rotate = document.getElementById("rotate");
deg = 360;
setInterval(function(){
  if(deg > 720){
    deg = 360;
  }
  rotate.style.transform = "rotateY(" + deg + "deg)";
  deg = (deg + 360);
}, 5000)