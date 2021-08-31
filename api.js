const loadTemparatureData = () => {
    const key = "a1d9c445802e1d4ceb6f9b29e5cb97cd";
    const inputValue = document.getElementById('input-value');


    if (inputValue == 0) {
        console.log('input city name')
    } else {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`)
            .then(res => res.json())
            .then(data => displayTemparature(data));
    }
    inputValue.value = '';
}
const displayTemparature = (data) => {
    console.log(data);
    const weatherIcon = document.getElementById('weather-icon');
    const cityName = document.getElementById('city-name');
    const celciusNumber = document.getElementById('celcius-number');
    const getIcon= data.weather[0].icon;
    cityName.innerText = data.name;
    celciusNumber.innerText = ((data.main.temp) - 273.15).toFixed(2);
    weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${getIcon}@2x.png`);

}
