import clear_day from "./icons/clear_day.jpg";
import snow from "./icons/snow.jpg";
import windy from "./icons/windy.jpg";
import cloudy from "./icons/cloudy.jpg";
import partly_cloudy from "./icons/partly_cloudy.jpg";
import rainy from "./icons/rainy.jpg"


export function updateDOM(weather) {

    const weatherBox = document.getElementById("weather-box");
    const imgContainer = document.getElementById("img-container");
    imgContainer.innerHTML = "";

    document.getElementById("city-name").textContent = `Weather in ${weather.location}`;
    document.getElementById("temperature").textContent = `Temperature: ${weather.temperature}C`;
    document.getElementById("description").textContent = `Condition: ${weather.condition}`;
    document.getElementById("humidity").textContent = `Humidity: ${weather.humidity}%`;
    document.getElementById("wind-speed").textContent = `Wind Speed: ${weather.windSpeed} km/h`;

    const image = document.createElement("img");
    image.src = getIcon(weather.icon);
    image.classList.add("icon");
   
    imgContainer.appendChild(image);

    weatherBox.classList.add("show");
}

function getIcon(icon) {
    console.log(icon)
    switch(icon) {
        case "clear-day":
          return clear_day
        case "partly-cloudy-day":
            return partly_cloudy
        case "snow":
          return snow
        case "rain":
            return rainy
        case "cloudy":
            return cloudy
        case "windy":
            return windy
    }
}