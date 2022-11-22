const city = document.getElementById('city')
const searchButton = document.getElementById('searchButton')
const stats = document.getElementById('stats')
const temp = document.getElementById('temp')
const icon = document.getElementById('icon')




    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd185af8f1emshcdac8ceae87cad7p19450fjsn92d84804cdf7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };


const getWeatherInfo = async (city) =>{
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`
    let weatherInfo = await fetch(url, options)
    let data = await weatherInfo.json()
    stats.innerText = data.current.condition.text
    temp.innerHTML = `Temp: ${data.current.temp_c} <span>&#8451;</span>`
    icon.innerHTML = `<img src = '${data.current.condition.icon}' width = "100%" height = "100%">`
    console.log(data)
    
}

searchButton.onclick = () =>{
    getWeatherInfo(city.value)
}