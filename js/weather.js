const API_KEY = "3b385a17cb03cbec83e04ba8126393ad"

function onGeoOk(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather");
    weather.innerText = `${data.name} |  ${data.main.temp} C° |  ${data.weather[0].main}`
 });
}
function onGeoError() {
    alert("Can't find your location!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

setInterval(onGeoOk, 3600000);