
const apiKey ="093eb16b2cfb8816bcabe70b1214b17e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");//.search input  . is main for class selection
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
 document.querySelector(".city").innerHTML =data.name;//it will update the city name
document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
document.querySelector(".wind").innerHTML =data.main.wind.speed + "km/h";//updating all

console.log("Weather condition:", data.weather[0].main);

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "images/clouds.png";   
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "images/mist.png";
} else if (data.weather[0].main == "Snow") {
  weatherIcon.src = "images/snow.png";
}else {
  weatherIcon.src = "images/default.png?";
}

}
// Trigger checkWeather on Enter key press inside input
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


searchBtn.addEventListener("click",()=>{  //after click
checkWeather(searchBox.value);//give city name written
})

    