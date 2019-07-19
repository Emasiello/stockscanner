var style;
var url;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

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

document.getElementById("take").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

document.getElementById("take").addEventListener("tap", function() {
	context.drawImage(video, 0, 0, 640, 480);
});
