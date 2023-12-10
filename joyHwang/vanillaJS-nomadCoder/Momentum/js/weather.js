// let weatherIcon = {
//     "01": "fas fa-sun",
//     "02": "fas fa-cloud-sun",
//     "03": "fas fa-cloud",
//     "04": "fas fa-cloud-meatball",
//     "09": "fas fa-cloud-sun-rain",
//     10: "fas fa-cloud-showers-heavy",
//     11: "fas fa-poo-storm",
//     13: "far fa-snowflake",
//     50: "fas fa-smog",
// };

const API_KEY = "12b1e691ab9c9a69016aaf3fd0c304d2";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((respose) =>
        respose.json().then((data) => {
            const weather = document.querySelector(".weather span");
            const city = document.querySelector(".city span");
            const icon = document.querySelector(".weather-icon");
            weather.innerHTML = `${data.weather[0].main} ${data.main.temp}° `;
            city.innerHTML = `${data.name}, ${data.sys.country}`;
            // const weatherClassName = weatherIcon[data.weather[0].icon.substr(0, 2)].split(" ");
            // icon.classList.add(weatherClassName[0], weatherClassName[1]);
        })
    );
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);