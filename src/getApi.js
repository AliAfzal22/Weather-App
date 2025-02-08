export  async function getWeather(location) {

    try {
        const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=WC5TBH3XC4G4FP7CXJBGDFT55&contentType=json`, {
            mode: 'cors'
          });
          
        const jsonData = await data.json()
        console.log(jsonData);
        return filterData(jsonData,location);
    }
    catch (error) {
        alert("dont fuck with me nigga");
        console.error(error);
        return null; // Return null in case of failure
}
}

function filterData(json,location) {
    const temperature = json.days[0].temp;
    const humidity = json.days[0].humidity;
    const windSpeed = json.days[0].windspeed;
    const condition = json.days[0].description;
    const icon = json.days[0].icon;
    return {location,temperature,windSpeed,humidity,condition,icon}
}

