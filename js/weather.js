function imOk (pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const APIkey = '2183e810f91b3c0cc2cd5ac681edd888&units=metric'
    const string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    //console.log('I shot a missile at ', lat, lon,'\n', string)
    fetch(string).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = "Weatherㅣ" + data.name;
        weather.innerText = "Geolocationㅣ" + data.weather[0].main;

    })
}
function GG () {
    alert(`Maybe your in andromeda. I don't know andromeda's weather`)
}
navigator.geolocation.getCurrentPosition(imOk, GG)