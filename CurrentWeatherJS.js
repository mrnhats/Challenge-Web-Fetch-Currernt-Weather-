// DarkSy API key.
_dsSecret = "20d3bcceeffdb668a8d038b312751b70";
// Funtion show weather at Latitudu an Longitude.
function getWeather(lat,lng){
  var proxy = 'http://cors-anywhere.herokuapp.com/';
  var dsAPI = 'https://api.darksky.net/forecast/';
  var dsKey = _dsSecret + "/";
  //Exclude some number of data blocks from the API response.
  var dsParams = "?exclude=minutely,hourly,daily,alerts.flags&units=auto";
  //Complete URLRequest.
  var URLRequest = proxy + dsAPI + dsKey + String(lat) + "," + String(lng) + dsParams
  //Get JSON from URLRequest.
  $.getJSON ( URLRequest)
  .done(function(data){
    //Show Summary weather.
    $("#wSummary").text(data.currently.summary);
    //Show Latitude and Longitude.
    $("#geoCoords").text("LAT: "+data.latitude + " LNG: " + data.longitude);
    //Show Timezone.
    $("#geoLoc").text("TimeZone: " + data.timezone);
    //Show Temperature.
    $("#wTemp").html(String(data.currently.temperature)+"&#176C");
    //Show Weather icon.
    switch(data.currently.icon){
      case 'partly-cloudy-night':
        $("#wIcon").html('<img src="img/partly-cloudy-night.jpg" alt="">')
      break;
      case 'cloudy':
        $("#wIcon").html('<img src="img/cloudy.jpg" alt="">')
      break;
      case 'rain':
         $("#wIcon").html('<img src="img/rain.jpg" alt="">')
       break;
       case 'partly-cloudy-day':
        $("#wIcon").html('<img src="img/partly-cloudy-day.jpg" alt="">')
       break;
     }
    } )
    .fail(function(){
        alert('Sorry, something bad happened when retrieving the weather');
    });
}
//Check if Geolocation is supported for browser.
function getLocation() {
    if (navigator.geolocation) {
      //If supported, run the watchPosition() method.
      navigator.geolocation.watchPosition(showLocation);
    }
    //If not, display a message to the user. 
    else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
//Function show weather at Your position.
function showLocation(position) {
    let geoLat = position.coords.latitude;
    let geoLng = position.coords.longitude;
    getWeather(geoLat,geoLng);
}
//Function show the weather where you search.
function wSearch(){
  var x = document.getElementById("wLocation").value;
  //Get JSON from https://us1.unwiredlabs.com to get the Latitude and Longitude where you search.
  $.getJSON("https://us1.unwiredlabs.com/v2/search.php?token=b63a3007d5920b&q="+x)
    .done(function(loc){
      getWeather(loc.address[0].lat,loc.address[0].lon);
    })
    .fail(function(){
      alert('Sorry, something bad happened when finding location')
    });
}
//Show weather at Your posotion after reload page.
window.onload = getLocation();