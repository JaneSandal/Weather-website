
const apikey = "b09e1e1dc2223963b0fa234c2261a1d1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
    
async function checkWeather(city){
    const responce = await fetch(apiurl +city+'&appid=' + apikey)
    
    if(responce.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector("weather").style.display ="none";
    }else{

    var data = await responce.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText= data.main.humidity + "%";
    document.querySelector(".temperature").innerText=Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerText= data.wind.speed + "km/h";
    document.querySelector(".description").innerText = data.weather[0].description;

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector("error").style.display="none";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
