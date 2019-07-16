var style;
var url;

// When text is detected by camera change text_inputCode to match

onEvent("imageGoat", "click", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  // open broswer on page url
});

onEvent("imageStockX", "click", function() {
  style = getText("text_inputCode");
  url = "https://stockx.com/search/sneakers?s="+style;
  // open broswer on page url
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
