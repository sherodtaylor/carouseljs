var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
var images = Array.prototype.slice.call(document.getElementsByTagName('img'));
var timer;
var previous = img3;
var current = img1;
var next = img2;
previous.style.zIndex = 0;
next.style.zIndex = 1;
current.style.zIndex = 2;

function fadeOut(){
   var opacity = previous.style.opacity;
   previous.style.opacity = opacity -= 0.02;
}; 
function fade(){ 
   timer = setInterval(fadeOut, 15);
};

function findPrevious(){
  var imageArray = []; for ( var i = 0; i < images.length; i += 1){
	imageArray.push(images[i]);
    if ( parseInt(images[i].style.zIndex) === 2) {
       previous = images[i];
    }
    else if ( parseInt(images[i].style.zIndex === 1)) {
       current = images[i];
    }
    else if ( parseInt(images[i].style.zIndex === 0)) {
       next = images[i];
    }
  }
}

function nextImage(){
  previous.style.opacity = 1;
  next.style.zIndex = 1 ;
  current.style.zIndex = 2 ;
  previous.style.zIndex = 0;
  clearInterval(timer);
  previous.style.opacity = 1;
  setInterval(fade, 1000);
  setTimeout(function () {
	next.style.zIndex = 2 ;
	current.style.zIndex = 1 ;
	previous.style.zIndex = 0;
  }, 2000) 
    findPrevious();
}
function previousImage(){
  previous.style.opacity = 1;
  findPrevious();
  clearInterval(timer);
  previous.style.opacity = 1;
  setInterval(fade, 1000);
  setTimeout(function () {
  previous.style.zIndex = 2 ;
  current.style.zIndex = 1 ;
  next.style.zIndex = 0;
  }, 2000)
}
function imageOne() {
  previous.style.opacity = 1;
  findPrevious();
  clearInterval(timer);
  setInterval(fade, 1000);
  setTimeout(function () {
	img1.style.zIndex = 2 ;
	img2.style.zIndex = 1 ;
	img3.style.zIndex = 0;
  }, 1000)
}
function imageTwo() {
	previous.style.opacity = 1;
	findPrevious();
	clearInterval(timer);
	setInterval(fade, 1000);
    setTimeout (function (){
    img2.style.zIndex = 2 ;
	img3.style.zIndex = 1 ;
	img1.style.zIndex = 0;
  }, 1000)
}
function imageThree() {
	previous.style.opacity = 1;
	findPrevious();
	clearInterval(timer)
	setInterval(fade, 1000);
    setTimeout( function () {
	img3.style.zIndex = 2 ;
	img1.style.zIndex = 1;
	img2.style.zIndex = 0;
  }, 1000)
}


