function renderWeather(weather){
    console.log(weather);
    var resultContainer = document.getElementById('weather-result')
    resultContainer.style.background = 'red'
    var cityName = document.createElement('h2')
    cityName.textContent = weather.name
    var temp = document.createElement('p')
    temp.textContent = 'temp:' + weather.main.temp + 'F'
    var humidity = document.createElement('p')
    humidity.textContent = 'humidity:' + weather.main.humidity + '%'
    var wind = document.createElement('p')
    wind.textContent = 'wind:' + weather.wind.speed + 'mph' + " " + weather.wind.deg + 'degree'
    resultContainer.append(cityName)
    resultContainer.append(temp)
    resultContainer.append(humidity)   
    resultContainer.append(wind)   
}

function fetchWeather(query){
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=Amman&units=imperial&appid=88d928686aaebf3374040c02d110ca30'

    fetch(url)
    .then(response => response.json())
    .then(data => renderWeather(data))
}
fetchWeather()