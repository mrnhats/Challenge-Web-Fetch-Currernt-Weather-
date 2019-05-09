# Fetch-Current-Weather
Get the current weather for a given zip/postal code. Optional: Try locating the user automatically.

1.Check if Geolocation is supported for browser.
    
    -If supported, run the watchPosition() method.
    
    -If not, display a message to the user. 

2.DarkSky API
    
    -Retrieve weather information with specific latitude and longitude from DarkSky.
    
    -dsAPIkey is secret key grants you access to the Dark Sky API.
    
    -dsAPI is types of API requests to retrieve the current weather forecast.
    
    -dsParams to filter data from JSON.
    
    -After getJSON we will show the information on the UI.

3.Unwiredlabs API
    
    -Access the coordinates of the location you want to see the weather.
    
    -Similar to the DarkSky API, we will getJSON and return the specific coordinates.
    
    -Put the coordinates you just found into the DarkSky API request to show current weather.


