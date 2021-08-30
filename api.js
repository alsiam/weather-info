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
    const cityName = document.getElementById('city-name');
    const celciusNumber = document.getElementById('celcius-number');
    cityName.innerText = data.name;
    celciusNumber.innerText = ((data.main.temp) - 273.15).toFixed(2);
}
