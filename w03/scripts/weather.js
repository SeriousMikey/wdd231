const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b5948bd4e6a22f729bce3a184cd7b159";

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    captionDesc.textContent = `${desc}`;
}

apiFetch();