/* NASA API */
    var req = new XMLHttpRequest();
    var url = "https://api.nasa.gov/planetary/apod?api_key=";
    var api_key = "bQult4DPgw6h2KQkOvTRKv1RvkaUm4DD0Hjen9Al";
    var hd = "&hd=true";


    req.open("GET", url + api_key + hd);
    req.send();

    req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})

function weatherBalloon( cityID ) {
  var key = '{y59e5cb76c8e18c86fa7054ca40ed1c75}';

  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBallon( 759660 );
}
