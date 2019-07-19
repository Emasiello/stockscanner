var style;
var url;

// When text is detected by camera change text_inputCode to match

onEvent("imageGoat", "click", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  window.location.href = url;
});

onEvent("imageStock", "click", function() {
  style = getText("text_inputCode");
  url = "https://stockx.com/search/sneakers?s="+style;
  window.location.href = url;
});

onEvent("imageGoat", "tap", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  window.location.href = url;
});

onEvent("imageStock", "tap", function() {
  style = getText("text_inputCode");
  url = "https://stockx.com/search/sneakers?s="+style;
  window.location.href = url;
});

onEvent("take", "click", function() {
  draw( video, thecanvas, thumbnail_img)
});

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function draw( video, thecanvas, img ){
 
		// get the canvas context for drawing
		var context = thecanvas.getContext('2d');
 
		// draw the video contents into the canvas x, y, width, height
    context.drawImage( video, 0, 0, thecanvas.width, thecanvas.height);
 
		// get the image data from the canvas object
    var dataURL = thecanvas.toDataURL();
 
		// set the source of the img tag
		img.setAttribute('src', dataURL);
