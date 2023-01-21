const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var x1=0,y1=0;
const d = new Date();
let day = weekday[d.getDay()];
var today = d.getHours();
var number = 0;

$(document).ready(function(){
  setInterval(callme,1500);
})

$("#map").attr("hidden",true);

function callme(){
  $("#status").animate({opacity:0.7}).animate({opacity:1.5});
}

if(localStorage.getItem("number")!="+91")
{
  number = localStorage.getItem("number");
  $("#gaurd").attr("href","tel:"+number);
  $("input").attr("hidden",true);
  $("#button1").attr("hidden",true);
  $("#button2").attr("hidden",false);
}

$("#button1").on("click",function(){
  number=document.getElementById("mytext").value;
  $("#gaurd").attr("href","tel:"+number);
  if(number!="+91")
    {
      localStorage.setItem("number", number);
      $("input").attr("hidden",true);
      $("#button1").attr("hidden",true);
      $("#button2").attr("hidden",false);
    }
});

$("#button2").on("click",function(){
  $("input").attr("hidden",false);
  $("#button1").attr("hidden",false);
  $("#button2").attr("hidden",true);
});

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
// document

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  x1=position.coords.latitude;
  y1=position.coords.longitude;

  $("#map").attr("hidden",false);

  const uluru = { lat: x1, lng: y1 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

}
