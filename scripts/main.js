/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'All hope abandon, ye who enter here.';
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('filter');
    if(mySrc === 'invert(0%)') { // filter is off
      myImage.setAttribute ('filter','invert(100%)');
    } else { // filter is on
      myImage.setAttribute ('filter','invert(0%)');
    }
}
