// Setting Variables 
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

var images = Array.prototype.slice.call(document.getElementsByTagName('img'));
var timer;
var previous = images[2];
var current = images[0];
var next = images[1];
previous.style.zIndex = 0;
next.style.zIndex = 1;
current.style.zIndex = 2;

/*
 * Commenting This code out because it isn't in use.
 * couldn't finish fade effect
 *
function fadeOut(){
   var opacity = previous.style.opacity;
   previous.style.opacity = opacity -= 0.02;
}; 

function fade(){ 
   timer = setInterval(fadeOut, 15);
};
*/

// This shifts Images forward to reorder them
function shiftImagesForward() {
  shifted = images.shift();
  images.push(shifted);
}

// This pops backwards for the previous function
function popImagesBackwards() {
  popped = images.pop();
  images.unshift(popped);
}

function nextImage(){
  previous = images[2];
  current = images[0];
  next = images[1];
	shiftImagesForward();
	next.style.zIndex = 2 ;
	current.style.zIndex = 1 ;
	previous.style.zIndex = 0;
}

function previousImage(){
  previous = images[2];
  current = images[0];
  next = images[1];
  popImagesBackwards();
  previous.style.zIndex = 2 ;
  current.style.zIndex = 1 ;
  next.style.zIndex = 0;
}

function imageOne() {
	img1.style.zIndex = 2 ;
	img2.style.zIndex = 1 ;
	img3.style.zIndex = 0;
}

function imageTwo() {
  img2.style.zIndex = 2 ;
	img3.style.zIndex = 1 ;
	img1.style.zIndex = 0;
}

function imageThree() {
	img3.style.zIndex = 2 ;
	img1.style.zIndex = 1;
	img2.style.zIndex = 0;
}


