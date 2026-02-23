// GET ALL THE CHANGING PARTS OF THE PAGE
const htmlBody = document.querySelector("body")
const hourAndMinuteTag = document.getElementById("time-hour-minute");
const amOrpmTag = document.getElementById("am-or-pm");
const dayAndMonth = document.getElementById("day-and-month");
const year = document.getElementById("year");
const formButton = document.getElementById("formButton");
const errorPara = document.getElementById("error")
const dayOneTemp = document.getElementById("day-one-temp-h2")
const dayOneTempDate = document.getElementById("day-one-temp-date")
const dayTwoTemp = document.getElementById("day-two-temp-h2")
const dayTwoTempDate = document.getElementById("day-two-temp-date")
const dayThreeTemp = document.getElementById("day-three-temp-h2")
const dayThreeTempDate = document.getElementById("day-three-temp-date")
let city = "Lagos";

// CALCULATE THE TIME AND DATE EVERY SECOND
setInterval(() => {
  const time = new Date();
  // LETS GET THE HOURS AND MINUTES
  const getHours = time.getHours();
  const getMinutes = time.getMinutes();
  const hour = getHours > 12 ? getHours - 12 : getHours;
  const amOrpm = getHours > 12 ? `PM` : `AM`;
  const minute = getMinutes < 9 ? `0${getMinutes}` : getMinutes;
  const hourAndMinute = `${hour}:${minute}`;
  hourAndMinuteTag.textContent = hourAndMinute;
  amOrpmTag.textContent = amOrpm;
  //console.log(hourAndMinute + amOrpm)

  // LETS GET THE MONTH AND DAY
  const getDay = time.getDate();
  let getMonth;
  const getYear = time.getFullYear();

  switch (time.getMonth()) {
    case 0:
      getMonth = "Jan";
      break;
    case 1:
      getMonth = "Feb";
      break;
    case 2:
      getMonth = "Mar";
      break;
    case 3:
      getMonth = "Apr";
      break;
    case 4:
      getMonth = "May";
      break;
    case 5:
      getMonth = "Jun";
      break;
    case 6:
      getMonth = "Jul";
      break;
    case 7:
      getMonth = "Aug";
      break;
    case 8:
      getMonth = "Sep";
      break;
    case 9:
      getMonth = "Oct";
      break;
    case 10:
      getMonth = "Nov";
      break;
    case 11:
      getMonth = "Dec";
      break;
    default:
      break;
  }

  dayAndMonth.textContent = `${getDay} ${getMonth}`;
  year.textContent = getYear;

  //console.log(`${getDay} ${getMonth} ${getYear}`)
}, 1000);

// GET THE CITY FROM THE FORM
formButton.addEventListener("click", function (e) {
  e.preventDefault();
  const searchCity = document.getElementById("search-city");
  city = searchCity.value;
  searchCity.value = "";
  //console.log(city);
  getWeatherData();
});

async function getWeatherData() {
  const api_key = "G5NHULAYP3G5EFWZLZY32WER3";
  errorPara.textContent = ""
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    renderData(weatherData);
  } catch (error) {
    // print the error on screen
    errorPara.textContent = error
  }
}

function fahreheitToCelcius(tempInFahrenheit){
  return Math.round((tempInFahrenheit - 32) * (5 / 9))
}

// RENDER TO SCREEN WHAT WE GET FROM DATA API
function renderData(weatherObj) {
  const locationTempDes = document.getElementById("location-temp");
  const todayDescription = document.querySelector(".today-description");
  const forcastDescription = document.querySelector(".forcast-description");
  const todayTempNumber = document.getElementById("today-temp-number");
  const middleImage = document.querySelector(".middle-image")

  locationTempDes.textContent = `${city}'s temperature today is:`;
  todayDescription.textContent = weatherObj.currentConditions.conditions;
  forcastDescription.textContent = weatherObj.description;

  // const tempInFahrenheit = weatherObj.currentConditions.temp;
  const tempInCelcius = fahreheitToCelcius(weatherObj.currentConditions.temp)  
  todayTempNumber.textContent = tempInCelcius

  if (tempInCelcius > 19 && tempInCelcius < 26){
    middleImage.textContent = "🌤️"
    htmlBody.style.backgroundColor = "#e88104"
    htmlBody.style.color = "#191818"
  } else if (tempInCelcius > 25 && tempInCelcius < 31){
    middleImage.textContent = "☀️"
    htmlBody.style.backgroundColor = "#e26702"
    htmlBody.style.color = "#1a0000"
  } else if (tempInCelcius > 30){
    middleImage.textContent = "🔥"
    htmlBody.style.backgroundColor = "#ff0000"
    htmlBody.style.color = "#150000"
  } else if (tempInCelcius < 20 && tempInCelcius > 10){
    middleImage.textContent = "🌨️"
    htmlBody.style.backgroundColor = "#99dff7"
    htmlBody.style.color = "#0c0b0b"
  } else if (tempInCelcius < 10 && tempInCelcius > 0){
    middleImage.textContent = "☃️"
    htmlBody.style.backgroundColor = "#80abf4"
    htmlBody.style.color = "#0b0a0a"
  } else if (tempInCelcius < 0){
    middleImage.textContent = "🥶"
    htmlBody.style.backgroundColor = "#00bbff"
    htmlBody.style.color = "#000000"
  }

  // days[0].temp   fahreheitToCelcius(weatherObj.days[0].temp) 
  dayOneTemp.textContent =  fahreheitToCelcius(weatherObj.days[0].temp) 
  dayOneTempDate.textContent = weatherObj.days[0].datetime
  dayTwoTemp.textContent =  fahreheitToCelcius(weatherObj.days[1].temp) 
  dayTwoTempDate.textContent = weatherObj.days[1].datetime
  dayThreeTemp.textContent =  fahreheitToCelcius(weatherObj.days[2].temp) 
  dayThreeTempDate.textContent = weatherObj.days[2].datetime
}

getWeatherData();
