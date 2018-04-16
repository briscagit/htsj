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
    //alert("clicked image");
    //var myProperty = image.style.filter;

    //var f = image.style.filter
    // filter is off or image has not been clicked
    if (image.style.filter === 'invert(0%)' || image.style.filter === '') image.style.filter = 'invert(100%)';
    // filter is on
    else image.style.filter = 'invert(0%)';
}
