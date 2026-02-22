// GET ALL THE CHANGING PARTS OF THE PAGE

const hourAndMinuteTag = document.getElementById("time-hour-minute")
const amOrpmTag = document.getElementById("am-or-pm")
const dayAndMonth = document.getElementById("day-and-month")
const year = document.getElementById("year")
const formButton = document.getElementById("formButton")

let city = "Lagos"
// CALCULATE THE TIME AND DATE EVERY SECOND
setInterval(()=>{
    const time = new Date()
    // LETS GET THE HOURS AND MINUTES
    const getHours = time.getHours()
    const getMinutes = time.getMinutes()
    const hour = getHours > 12 ? getHours - 12 : getHours
    const amOrpm = getHours > 12 ? `PM` : `AM`
    const minute = getMinutes < 9 ? `0${getMinutes}` : getMinutes
    const hourAndMinute = `${hour}:${minute}`
    hourAndMinuteTag.textContent = hourAndMinute
    amOrpmTag.textContent = amOrpm
    //console.log(hourAndMinute + amOrpm)

    // LETS GET THE MONTH AND DAY
    const getDay = time.getDate()
    let getMonth;
    const getYear = time.getFullYear()

    switch (time.getMonth()) {
        case 0:
            getMonth = "Jan"
            break;
        case 1:
            getMonth = "Feb"
            break;
        case 2:
            getMonth = "Mar"
            break;   
        case 3:
            getMonth = "Apr"
            break;
        case 4:
            getMonth = "May"
            break;
        case 5:
            getMonth = "Jun"
            break;
        case 6:
            getMonth = "Jul"
            break;
        case 7:
            getMonth = "Aug"
            break;
        case 8:
            getMonth = "Sep"
            break;
        case 9:
            getMonth = "Oct"
            break;
        case 10:
            getMonth = "Nov"
            break;
        case 11:
            getMonth = "Dec"
            break; 
        default:
            break;
    }

    dayAndMonth.textContent = `${getDay} ${getMonth}`
    year.textContent = getYear

    //console.log(`${getDay} ${getMonth} ${getYear}`)
}, 1000)


// GET THE CITY FROM THE FORM
formButton.addEventListener("click", function(e){
    e.preventDefault()
    const searchCity = document.getElementById("search-city")
    city = searchCity.value 
    searchCity.value = ""
    console.log(city)
    getWeatherData()
})

    // G5NHULAYP3G5EFWZLZY32WER3
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=11111111111111111
// Remember that when you see a weather forecast on TV, in a newspaper or on the radio, that anything from 20 degrees upwards is going to be warm, above 25 degrees is hot, above 30 degrees is very hot. Below 20 is cool, below 10 degrees is cold, and below zero degrees means that it will be icy outside as the water will freeze and it will feel very cold outside.


async function getWeatherData() {
    const api_key =  "G5NHULAYP3G5EFWZLZY32WER3"

    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`
        const response = await fetch(url)
        const weatherData = await response.json()
        // START USING WEATHER DATA
        console.log(weatherData)
        renderData(weatherData)
    } catch (error) {
        // print the error on screen
    }
}


// RENDER TO SCREEN WHAT WE GET FROM DATA API
function renderData(weatherObj){
    const locationTempDes = document.getElementById("location-temp")
    const todayDescription = document.querySelector(".today-description")
    const forcastDescription = document.querySelector(".forcast-description")
    const todayTempNumber = document.getElementById("today-temp-number")

    locationTempDes.textContent = `${city}'s temperature today is:`
    todayDescription.textContent = weatherObj.currentConditions.conditions
    forcastDescription.textContent = weatherObj.description

    const tempInFahrenheit = weatherObj.currentConditions.temp
    const tempInCelcius = Math.round((tempInFahrenheit -32) * (5/9))
    todayTempNumber.textContent = tempInCelcius
}

getWeatherData()