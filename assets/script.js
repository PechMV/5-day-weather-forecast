//fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=c370e788c0eae3b89b83525d5007548d')
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    //.then(res => res.json())
    //.then(data => console.log(data))

// var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Minneapolis&limit=5&appid=c370e788c0eae3b89b83525d5007548d'

var apiKey = 'c370e788c0eae3b89b83525d5007548d';
var lat = 'position.coords.latiude';
var lon = 'position.coords.longitude';
var requestUrl = 'http://api.openwathermap.org/data/2.5/forecast?q=' + lat + lon '&appid=' + apiKey;

fetch(requestUrl)
    .then(function(response){
    return response.json();
})
.then(function (data) {
    console.log (data);
});