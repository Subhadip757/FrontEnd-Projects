const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid="
const apiKey = "91b1e9b7622423c1a3f899d8de91564f"

async function checkWeather(){
    let response = await fetch(apiUrl+apiKey)
    let data = response.json()

    console.log(data);
}   
checkWeather()
