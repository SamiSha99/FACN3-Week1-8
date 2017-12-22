(function () {
  var button = document.querySelector(".search-btn");
  button.addEventListener("click", function() {
    console.log("event listener starts");
    var query = document.querySelector(".search-query").value;
    var key = "3032831d17234aa59eae0582139e63a2";

    var xhr = new XMLHttpRequest();
    var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=5";
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var giphyObj = JSON.parse(xhr.responseText);
        for(var i = 0; i < giphyObj.data.length; i++) {
          var result = giphyObj.data[i].images.fixed_height.url;
          var image = document.createElement("img");
          image.setAttribute("src", result);
          image.setAttribute("class", "image");
          var resultsArea = document.getElementsByClassName("search-results")[0];
          resultsArea.appendChild(image);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
 });
})();
