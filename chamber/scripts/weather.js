const currentWeather = document.getElementById("currentWeatherInfo");
const weatherForecast = document.getElementById("weatherForecast");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=16.77&lon=3.00&units=imperial&appid=b5948bd4e6a22f729bce3a184cd7b159";

apiFetch();

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    }
    else {
        throw Error(await response.text());
    }
}

function displayResults(data) {
    console.log(data);
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    //Current weather
    let div = document.createElement("div");
    div.setAttribute("class", "currentWeatherInfo")
    div.innerHTML = `
    <img src="${iconsrc}" alt="${data.weather[0].description}">
    <p>${data.main.temp} F<br>
    ${data.weather[0].main}<br>
    High: ${data.main.temp_max}<br>
    Low: ${data.main.temp_min}<br>
    Humdity: ${data.main.humidity}%<br>
    Sunrise: ${convertUnixToTime(data.sys.sunrise)}<br>
    Sunset: ${convertUnixToTime(data.sys.sunset)}<br>
    </p>
    `
    currentWeather.appendChild(div);


    //Weather forecast
    weatherForecast.innerHTML = `
    <h2>Weather Forecast</h2>
    <p>Today: ${data.main.temp}</p>
    <p>Tomorrow: ${data.main.temp_min}</p>
    <p>The Next Day: ${data.main.temp_max}</p>
    `
}

function convertUnixToTime(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Bamako'
    });
}