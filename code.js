var style;
var url;

// When text is detected by camera change text_inputCode to match

onEvent("imageGoat", "click", function() {
  style = getText("text_inputCode");
  url = "https://www.goat.com/search?query="+style;
  window.location.replace(url);
});

onEvent("imageStockX", "click", function() {
  style = getText("text_inputCode");
  url = "https://stockx.com/search/sneakers?s="+style;
  window.location.replace(url);
});
