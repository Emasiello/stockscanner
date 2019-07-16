var style;
var url;

// When text is detected by camera change text_inputCode to match

<div id="container">
	<video autoplay="true" id="videoElement">
	
	</video>
</div>

onEvent("imageGoat", "click", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  window.location.href = url;
});

onEvent("imageGoat", "tap", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  window.location.href = url;
});

onEvent("imageStock", "click", function() {
  style = getText("text_inputCode");
  url = "https://stockx.com/search/sneakers?s="+style;
  window.location.href = url;
});

onEvent("imageStock", "tap", function() {
  style = getText("text_inputCode");
  url = "https://www.stockx.com/search/sneakers?s="+style;
  window.location.href = url;
});
