import {updateDOM } from "./DOM.js";
import { getWeather } from "./getApi.js";
import "./style.css"

document.querySelector(".weather-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = document.getElementById("city-input").value.trim();
    if (!location) return;

    document.getElementById("weather-box").classList.remove("show");
    const weatherData = await getWeather(location);
    if (weatherData) updateDOM(weatherData);
});
