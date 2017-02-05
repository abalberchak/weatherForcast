$(document).ready(function () {
	$('form').submit(function() {
		// var url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1a155f90e7ec660faf990b7cedd6b3cf';
		var input = document.getElementById('city').value;
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=imperial&APPID=1a155f90e7ec660faf990b7cedd6b3cf';
		$.get(url, function(res) {
			console.log(city);
			console.log(res);
			var city = res.name;
			var weather = res.weather[0].description;
			var temperature = res.main.temp;
			var wind = res.wind.speed;
			console.log(wind);
			console.log(temperature);
			$('#results').html("<h2>" + city + "</h2><h4>Current Weather: " + weather + "</h4><h4>Temperature: " + temperature + "° F</h4><h4>Wind: " + wind + " mph</h4>");
		}, 'json');
		return false;
	});
})