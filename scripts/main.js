/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'All hope abandon, ye who enter here.';
*/

/*
<h1 id="id1">My Heading 1</h1>

<button type="button" 
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>
*/

var image = document.querySelector('img');

image.onclick = function() {
    var myProperty = image.style.filter;
    if(myProperty === 'invert(0%)') { // filter is off
      myProperty = 'invert(100%)';
    } else { // filter is on
      myProperty = 'invert(0%)';
    }
}
