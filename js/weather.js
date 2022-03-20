const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "2c2b0004e449f7e99bc7feeca7f73c08";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const degree = Math.round(data.main.temp);
      city.innerHTML = `<h1> 현재 위치 : ${data.name} </h1>`;
      weather.innerHTML = `<h1> 날씨 : ${data.weather[0].main} / 온도 : ${degree} ℃ </h1>`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);